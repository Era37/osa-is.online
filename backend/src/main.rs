use actix_web::{App, web, HttpServer};
use dotenvy::dotenv;
mod utils;
mod endpoints;
use utils::{Db, build_db};

use endpoints::blogs::new_blog;

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