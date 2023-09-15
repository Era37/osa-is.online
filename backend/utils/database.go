package utils

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

type Database struct {
	Redis *redis.Client
	Pg *sql.DB
}

func Connect() Database {
	redis := redis.NewClient(&redis.Options{})
	pg, err := sql.Open("postgres", "postgresql://postgres:a@0.0.0.0:5432?sslmode=disable")
	if err != nil {
		log.Fatal(err)
	}
	return Database{redis, pg}
}