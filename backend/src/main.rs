use actix_web::{App, web, HttpServer};
use dotenvy::dotenv;
mod utils;
mod endpoints;
use utils::{Db, build_db};

use endpoints::blogs::{new_blog, get_blogs, find_blog};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().unwrap();
    let db: Db = build_db().await;
    println!("Online");
    HttpServer::new(move || {
        App::new()
            .service(find_blog)
            .service(new_blog)
            .service(get_blogs)
            .app_data(web::Data::new(db.clone()))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}