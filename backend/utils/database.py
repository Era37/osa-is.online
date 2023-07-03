from redis.asyncio import ConnectionPool, Redis
import psycopg_pool
import os

EXPIRE = 5


class DatabaseAPI:
    @staticmethod
    async def get(table: str, query: dict, key: str):
        redis = Database.redisConn
        async with Database.pgConn.connection() as conn:
            async with conn.cursor() as cur:
                if key:
                    resp = await redis.get(key)
                    if resp is not None and len(resp) != 0:
                        return eval(resp)
                query_format = f"SELECT * FROM {table}"
                if len(query) != 0:
                    query_format += " WHERE "
                    for k in query.keys():
                        query_format += f"{k} = %({k})s "
                query_format += ";"
                await cur.execute(query_format.strip(), query)
                result = await cur.fetchall()
                if key:
                    await redis.set(key, str(result), EXPIRE)
                return result

    @staticmethod
    async def insert(table: str, data: dict, key: str):
        async with Database.pgConn.connection() as conn:
            async with conn.cursor() as cur:
                def build_tuple(entries: list):
                    tuple_format = "("
                    for entry in entries:
                        tuple_format += entry + ", "
                    tuple_format = tuple_format[:-2]
                    tuple_format += ")"
                    return tuple_format
                insert_format = f"INSERT INTO {table} "
                keys_formatted = []
                for entry in data.keys():
                    keys_formatted.append(f"%({entry})s")
                insert_format += f"{build_tuple(data.keys())} VALUES {build_tuple(keys_formatted)}"
                try:
                    await cur.execute(insert_format, data)
                except:
                    return {"code": 500, "message": "There was an error while adding blog to the database"}
                if key:
                    await Database.redisConn.set(key, str(data), EXPIRE)


class Database:
    redisConn = None
    pgConn = None

    @staticmethod
    def redisRegister(url: str):
        pool = ConnectionPool.from_url(url)
        Database.redisConn = Redis(connection_pool=pool, decode_responses=True)

    @staticmethod
    def pgsqlRegister(url: str):
        Database.pgConn = psycopg_pool.AsyncConnectionPool(
            min_size=1, max_size=10, conninfo=url)

    @staticmethod
    async def registerDatabase():
        redis, pg = os.getenv("REDIS_URL"), os.getenv("PG_URL")
        Database.pgsqlRegister(pg)
        Database.redisRegister(redis)
