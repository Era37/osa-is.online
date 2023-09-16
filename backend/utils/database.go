package utils

import (
	"database/sql"
	"log"
	"net/url"
	"os"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

var DB Database

type Database struct {
	Redis *redis.Client
	Pg *sql.DB
}

func Connect() {
	redisUrl, _ := url.Parse(os.Getenv("REDIS"))
	redisPassword, _ := redisUrl.User.Password()
	redis := redis.NewClient(&redis.Options{
		Addr: redisUrl.Host,
		Password: redisPassword,
	})
	pg, err := sql.Open("postgres", os.Getenv("PG"))
	if err != nil {
		log.Fatal(err)
	}
	pg.SetMaxOpenConns(10)
	pg.SetMaxIdleConns(10)
	DB = Database{redis, pg}
}

func InitDatabase(db *Database) {
	pg := db.Pg
	_, err := pg.Query(`CREATE TABLE IF NOT EXISTS blogs (
		date BIGINT NOT NULL,
		title TEXT NOT NULL,
		url TEXT PRIMARY KEY,
		content TEXT NOT NULL
	);`)
	if err != nil {
		log.Fatal(err)
	}
}