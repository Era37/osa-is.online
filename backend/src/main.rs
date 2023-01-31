use actix_web::{App, web, HttpServer};
use actix_cors::Cors;
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
        let cors = Cors::default()
            .allow_any_header()
            .allow_any_method()
            .allow_any_origin();
        App::new()
            .wrap(cors)
            .service(find_blog)
            .service(new_blog)
            .service(get_blogs)
            .app_data(web::Data::new(db.clone()))
    })
    .bind(("0.0.0.0", 80))?
    .run()
    .await
}