package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"jessica-is.online/backend/endpoints"
	"jessica-is.online/backend/utils"
)

var endpoints_array = []map[string]interface{} {
	{"path": "/blogs", "func": endpoints.Blogs},
	{"path": "/blog/{id}", "func": endpoints.Blog},
	{"path": "/new", "func": endpoints.NewBlog},
}

func main() {
	env_err := godotenv.Load()
	r := mux.NewRouter()
	r.Use(utils.MiddlewareHandler)
	if env_err != nil {
		log.Fatal(env_err)
	}
	utils.Connect()
	for _, endpoint_entry := range endpoints_array {
		call_path := endpoint_entry["path"].(string)
		call_func := endpoint_entry["func"].(func(http.ResponseWriter, *http.Request))
		r.HandleFunc(call_path, call_func)
	}
	utils.InitDatabase(&utils.DB)
	fmt.Println("Online")
	http.Handle("/", r)
	http.ListenAndServe("0.0.0.0:80", nil)
}

