use super::database::Db;
use bson::from_bson;
use futures::TryStreamExt;
use mongodb::{Collection, bson::Document, bson::Bson};
use r2d2::PooledConnection;
use r2d2_redis::{redis::Commands, RedisConnectionManager};
use serde_json::to_string;
use serde::de::DeserializeOwned;
use serde::Serialize;

pub async fn cache_data<'a, T>(key: String, filter: impl Into<Option<Document>>, database: &'a Db) -> Option<Vec<T>> where T: DeserializeOwned + Serialize + std::fmt::Debug {
    let mut redis_conn: PooledConnection<RedisConnectionManager> = database.redis.get().unwrap();
    let value: Option<String> = redis_conn.get(&key).ok();
    if value != None {
        let deserialized_value: Vec<T> = serde_json::from_str(value.unwrap().as_ref()).unwrap();
        return Some(deserialized_value);
    } else {
        let collection: Collection<Document> = database.mongo.collection(&key);
        let mut database_cursor = collection.find(filter, None).await.unwrap();
        let mut database_data: Vec<T> = Vec::new();
        while let Ok(entry) = database_cursor.try_next().await {
            if entry == None {
                break;
            }
            let converted_entry: T = from_bson(Bson::Document(entry.unwrap())).unwrap();
            database_data.push(converted_entry);
        }
        let _ : () = redis_conn.set(&key, to_string(&database_data).unwrap()).unwrap();
        let _: () = redis_conn.expire(&key, 300).unwrap();
        return Some(database_data);
    }
}