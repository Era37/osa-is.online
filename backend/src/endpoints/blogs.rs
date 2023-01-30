use actix_web::{post, get, web, HttpResponse, Responder, HttpRequest};
use crate::utils::{Db, Blog, cache_data, BlogPreview};
use mongodb::{bson::doc};

#[post("/new")]
pub async fn new_blog(req: HttpRequest, data: web::Data<Db>, blog_data: web::Json<Blog>) -> impl Responder {
    let key = dotenvy::var("KEY").unwrap();
    let token: Option<&str> = req.headers().get("token").and_then(|d| {
        d.to_str().ok()
    });
    if Some(key.as_ref()) != token {
        return HttpResponse::Unauthorized().body("Invalid Token");
    }
    let _ = &data.mongo.collection("blogs").insert_one(blog_data, None).await;
    HttpResponse::Ok().body("Blog added to database")
}

#[get("/blogs")]
pub async fn get_blogs(data: web::Data<Db>) -> impl Responder {
    let blogs: Vec<BlogPreview> = match cache_data("blogs".to_string(), doc! {}, &data).await {
        Some(t) => t,
        None => panic!("Something went wrong")
    };
    HttpResponse::Ok().json(web::Json(blogs))
}

#[get("/blogs/{id}")]
pub async fn find_blog(path: web::Path<(String,)>, data: web::Data<Db>) -> impl Responder {
    let url_id = path.into_inner().0;
    let blog: Vec<Blog> = cache_data("blogs".to_string(), doc! { "url": url_id }, &data).await.unwrap();
    HttpResponse::Ok().json(web::Json(&blog[0]))
}