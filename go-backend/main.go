package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"jessica-is.online/go-backend/utils"
)

func registerEndpoints(r *gin.Engine) {

}

func main() {
	utils.ConnectDB()
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}
	r := gin.Default()
	r.Use(cors.New(cors.DefaultConfig()))
	registerEndpoints(r)

	r.Run("0.0.0.0:80")
}
