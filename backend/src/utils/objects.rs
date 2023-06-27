use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Blog {
    pub content: String,
    pub date: u64,
    pub description: String,
    pub title: String,
    pub url: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct BlogPreview {
    pub title: String,
    pub url: String,
}

#[derive(Serialize, Debug)]
pub struct Error<'a> {
    pub message: &'a str,
}
