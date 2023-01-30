use r2d2::Pool;
use r2d2_redis::{r2d2, RedisConnectionManager};
use mongodb::{Client, options::ClientOptions, Database};
use dotenvy;

fn redis_pool() -> Pool<RedisConnectionManager> {
    let redis_uri = dotenvy::var("REDIS").unwrap();
    let manager = RedisConnectionManager::new(redis_uri).unwrap();
    r2d2::Pool::builder()
        .build(manager)
        .unwrap()
}

async fn mongo_pool() -> Database {
    let mongo_uri = dotenvy::var("MONGO").unwrap();
    let client_options = ClientOptions::parse(mongo_uri).await;
    Client::with_options(client_options.unwrap()).unwrap().database("portfolio")
}

#[derive(Clone)]
pub struct Db {
    pub redis: Pool<RedisConnectionManager>,
    pub mongo: Database
}

pub async fn build_db() -> Db {
    let redis = redis_pool();
    let mongo = mongo_pool().await;
    Db {
        redis,
        mongo
    }
}