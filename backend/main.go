package main

import (
	//"database/sql"

	"fmt"
	"net/http"

	"jessica-is.online/backend/utils"
)
var db utils.Database

func home(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Pg.Query("SELECT * FROM blogs")
	if err != nil {
		fmt.Println(err)
		return
	}
	for rows.Next() {
		
	}
	fmt.Fprintf(w, "hello :3")
}

func main() {
	http.HandleFunc("/", home)
	fmt.Println("Online")
	db = utils.Connect()
	err := http.ListenAndServe("0.0.0.0:80", nil)
	if err != nil {
		fmt.Println(err)
	}
}