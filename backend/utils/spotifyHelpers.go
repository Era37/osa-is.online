package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/tidwall/gjson"
)

type Tracks []map[string]interface{}

type SpotifyTracksResponse struct {
	Artists string `json:"artists"`
	Url     string `json:"url"`
	Name    string `json:"name"`
}

type SpotifyTokenResponse struct {
	Access_token string `json:"access_token"`
	Expires_in   int    `json:"expires_in"`
	Token_type   string `json:"token_type"`
}

var playlist = "https://api.spotify.com/v1/playlists/6onj45lQm8DiLFT8nQQCOj/tracks"

func tokenGenerate() *string {
	redis_resp, err := DB.Redis.Get(context.Background(), "spotify_token").Result()
	if err == nil {
		return &redis_resp
	}
	var client, secret = os.Getenv("SPOTIFY_CLIENT"), os.Getenv("SPOTIFY_SECRET")
	url := fmt.Sprintf("https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=%s&client_secret=%s", client, secret)
	req, err := http.NewRequest("POST", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return nil
	}
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	local_client := &http.Client{}
	response, err := local_client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return nil
	}
	defer response.Body.Close()

	values := SpotifyTokenResponse{}
	err = json.NewDecoder(response.Body).Decode(&values)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	DB.Redis.Set(
		context.Background(),
		"spotify_token",
		values.Access_token,
		time.Duration(values.Expires_in)*time.Second,
	)
	return &values.Access_token
}

func GetSongs() *[]SpotifyTracksResponse {
	token := tokenGenerate()
	if token == nil {
		return nil
	}
	client := &http.Client{}
	req, err := http.NewRequest("GET", playlist, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return nil
	}
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", *token))
	req.Header.Set("Content-Type", "application/json")
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return nil
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response:", err)
		return nil
	}

	items := gjson.Get(string(body), "items").Array()
	var tracks []SpotifyTracksResponse
	for _, item := range items {
		var track SpotifyTracksResponse
		trackIndex := gjson.Get(item.String(), "track").String()
		artists := gjson.Get(trackIndex, "artists").Array()
		for _, artist := range artists {
			track.Artists += fmt.Sprintf("%s, ", gjson.Get(artist.String(), "name").String())
		}
		track.Artists = strings.TrimSuffix(track.Artists, ", ")
		var name, url = gjson.Get(trackIndex, "name").String(), gjson.Get(trackIndex, "external_urls.spotify").String()
		track.Name = name
		track.Url = url
		tracks = append(tracks, track)
	}
	tracksSliced := tracks[:5]
	return &tracksSliced
}
