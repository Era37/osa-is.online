package utils

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/redis/go-redis/v9"
)

type db struct {
	redis *redis.Client
	postgres *sql.DB
}

func generateRedis(address string, pwd string) *redis.Client {
	return redis.NewClient(&redis.Options{Addr: address, Password: pwd, DB: 0})
}

func generatePG(url string) *sql.DB {
	db, err := sql.Open("postgres", url)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func ConnectDB() *db {
	return &db{
		redis: generateRedis(os.Getenv("HOST"), os.Getenv("PWD")), 
		postgres: generatePG(os.Getenv("POSTGRES")),
	}
}