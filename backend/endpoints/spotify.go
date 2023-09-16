package endpoints

import (
	"encoding/json"
	"fmt"
	"net/http"

	"jessica-is.online/backend/utils"
)

func Spotify(w http.ResponseWriter, r *http.Request) {
	res := utils.GetSongs()
	if res == nil {
		fmt.Println("An Error Occured while getting songs")
		return
	}
	bytes, err := json.Marshal(res)
	if err != nil {
		fmt.Println(err)
		return
	}
	w.Write(bytes)
}
