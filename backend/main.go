package main

import (
	//"database/sql"
	"fmt"
	"net/http"

	"jessica-is.online/backend/utils"
)

func home(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello :3")
}

func main() {
	http.HandleFunc("/", home)
	fmt.Println("Online")
	utils.Connect()
	err := http.ListenAndServe("0.0.0.0:80", nil)
	if err != nil {
		fmt.Println(err)
	}
}