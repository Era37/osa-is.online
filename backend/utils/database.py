from redis import ConnectionPool, Redis
import psycopg
import psycopg_pool
import os


class Database:
    redisConn = None
    pgConn = None

    @staticmethod
    def redisRegister(url: str):
        pool = ConnectionPool(url=url)
        Database.redisConn = Redis(connection_pool=pool)

    @staticmethod
    async def pgsqlRegister(url: str):
        Database.pgConn = psycopg_pool.AsyncConnectionPool(
            min_size=1, max_size=10, conninfo=url)

    @staticmethod
    async def registerDatabase():
        redis, pg = os.getenv("REDIS_URL"), os.getenv("PG_URL")
        await Database.pgsqlRegister(pg)
        Database.redisRegister(redis)
