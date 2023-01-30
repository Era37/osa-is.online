use super::database::Db;
use r2d2_redis::redis::Commands;
use std::thread;

pub async fn cache_data<T>(key: String, data_schema: T, database: Db) -> T {
    thread::spawn(move || {
        let mut redis_conn = database.redis.get().unwrap();
        let value: String = redis_conn.get(key).ok().unwrap();
    });
    data_schema
}