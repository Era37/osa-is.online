use actix_web::{post, App, web, HttpResponse, HttpServer, Responder, HttpRequest, Result};
use dotenvy::dotenv;
mod utils;
use utils::{Db, build_db};
use serde::Serialize;

#[derive(Serialize)]
struct Test {
    boobs: String
}

#[post("/new")]
async fn new_blog(req: HttpRequest, data: web::Data<Db>, req_body: String) -> impl Responder {
    let key = dotenvy::var("KEY").unwrap();
    let token: Option<&str> = req.headers().get("token").and_then(|d| {
        d.to_str().ok()
    });
    if Some(key.as_ref()) != token {
        return HttpResponse::Unauthorized().body("Invalid Token");
    }
    // &data.mongo;
    HttpResponse::Ok().body("poggers")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().unwrap();
    let db: Db = build_db().await;
    println!("Online");
    HttpServer::new(move || {
        App::new()
            .service(new_blog)
            .app_data(web::Data::new(db.clone()))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}