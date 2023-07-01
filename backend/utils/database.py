from redis import ConnectionPool, Redis
import psycopg
import psycopg_pool
import os


class Datebase:
    redisConn = None
    pgConn = None

    @staticmethod
    def redisRegister(url: str):
        pool = ConnectionPool(url=url)
        Datebase.redisConn = Redis(connection_pool=pool)

    @staticmethod
    def pgsqlRegister(url: str):
        conn = psycopg.AsyncConnection.connection(url=url)
        Datebase.pgConn = psycopg_pool.AsyncConnectionPool(
            connection_class=conn, min_size=1, max_size=10)

    @staticmethod
    def registerDatabase():
        redis, pg = os.getenv("REDIS_URL"), os.getenv("PG_URL")
        Datebase.pgsqlRegister(pg), Datebase.redisRegister(redis)
