package endpoints

import (
	"net/http"

	_ "github.com/gorilla/mux"
	"jessica-is.online/backend/utils"
)

func Blogs(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	res := utils.GetBlogs(&utils.DB)
	w.Write(res)
}