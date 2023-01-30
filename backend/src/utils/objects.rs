use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Blog {
    pub content: String,
    pub date: u32,
    pub description: String,
    pub title: String,
    pub url: String
}

#[derive(Serialize, Deserialize, Debug)]
pub struct BlogPreview {
    pub title: String,
    pub url: String
}