use base64::engine::{general_purpose, Engine as _};
use dotenvy::var;
use reqwest::header::{HeaderMap, CONTENT_TYPE};
use serde_json::Value;
use std::collections::HashMap;

const URL: &str = "https://api.spotify.com/v1/playlists/6onj45lQm8DiLFT8nQQCOj/tracks";

async fn get_bearer() -> String {
    let (secret, client) = (var("SPOTIFY_SECRET").unwrap(), var("SPOTIFY_CLIENT").unwrap());
    let b64 = general_purpose::STANDARD.encode(format!("{}:{}", client, secret));
    let client = reqwest::Client::new();

    let params = HashMap::from([("grant_type", "client_credentials")]);
    let mut headers = HeaderMap::new();
    headers.insert("Application", format!("Basic: {}", b64).parse().unwrap());

    let res = client.post(URL).form(&params).headers(headers).send().await;
    let clean_response: String = match res {
        Ok(v) => v.text().await.unwrap(),
        Err(_) => return String::from("")
    };
    let json: Value = serde_json::from_str(&clean_response).unwrap();
    let field_value = json["bearer"].as_str().unwrap().to_string();
    field_value
}
