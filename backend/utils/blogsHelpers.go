package utils

import (
	"context"
	"encoding/json"
	"fmt"
	"time"
)
var duration = 300 * time.Second

type Blog struct {
	Title string `json:"title"`
	Date int `json:"date"`
	Content string `json:"content"`
	Url string `json:"url"`
}

func GetBlogs(db *Database) []byte {
	var blogs []Blog
	pg, redis := db.Pg, db.Redis
	val, err := redis.Get(context.Background(), "blogs").Result()
	if err == nil {
		return []byte(val)
	}
	rows, err := pg.Query("SELECT * FROM blogs")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	for rows.Next() {
		var blog Blog
		err := rows.Scan(&blog.Date, &blog.Title, &blog.Url, &blog.Content)
		if err != nil {
			panic(err.Error())
		}
		blogs = append(blogs, blog)
	}
	if len(blogs) == 0 {
		return nil
	}
	jsonData, err := json.Marshal(blogs)
	fmt.Println(string(jsonData), err, blogs)
	if err != nil {
		fmt.Println(err);
		return nil
	}
	redis.Set(context.Background(), "blogs", jsonData, duration)
	return jsonData
}