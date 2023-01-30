use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct Blog {
    pub content: String,
    pub date: u32,
    pub description: String,
    pub title: String
}

#[derive(Serialize, Deserialize)]
pub struct BlogPreview {
    pub title: String,
    pub url: String
}