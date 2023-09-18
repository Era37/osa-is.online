package endpoints

import (
	"encoding/json"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"osa-is.online/backend/utils"
)

func clean(bytes []byte) []byte {
	if bytes == nil {
		return []byte("[]")
	}
	return bytes
}

func Blogs(w http.ResponseWriter, r *http.Request) {
	res := utils.GetBlogs()
	w.Write(clean(res))
}

func NewBlog(w http.ResponseWriter, r *http.Request) {
	var blog utils.Blog
	headers := r.Header
	if headers.Get("Authorization") != os.Getenv("KEY") {
		http.Error(w, "Invalid Key", http.StatusForbidden)
		return
	}
	err := json.NewDecoder(r.Body).Decode(&blog)
	if err != nil {
		http.Error(w, "Malformed body", http.StatusBadRequest)
		return
	}
	utils.NewBlog(blog)
	w.Write([]byte("Added to Database"))
}

func Blog(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]
	res := utils.GetBlog(id)
	w.Write(clean(res))
}
