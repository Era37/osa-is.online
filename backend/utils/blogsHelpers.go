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

func NewBlog(blog Blog) {
	DB.Pg.Query(
		`INSERT INTO blogs(date, title, url, content) VALUES($1, $2, $3, $4);`,
		blog.Date,
		blog.Title,
		blog.Url,
		blog.Content,
	)
}

func GetBlog(id string) []byte {
	var blog Blog
	pg, redis := DB.Pg, DB.Redis
	redis_res, err := redis.Get(context.Background(), "id").Result()
	if err == nil {
		return []byte(redis_res)
	} 
	rows, err := pg.Query("SELECT * FROM blogs WHERE url = $1", id)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer rows.Close()
	rows.Next()
	err = rows.Scan(&blog.Date, &blog.Title, &blog.Url, &blog.Content)
	if err != nil {
		return nil
	}
	jsonData, err := json.Marshal(blog)
	redis.Set(context.Background(), id, string(jsonData), duration)
	if err != nil {
		fmt.Println(err)
		return nil
	}
	return jsonData
}

func GetBlogs() []byte {
	var blogs []Blog
	pg, redis := DB.Pg, DB.Redis
	val, err := redis.Get(context.Background(), "blogs").Result()
	if err == nil {
		return []byte(val)
	}
	rows, err := pg.Query("SELECT * FROM blogs;")
	if err != nil {
		fmt.Println(err)
		return nil
	}
	defer rows.Close()
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
	if err != nil {
		fmt.Println(err);
		return nil
	}
	redis.Set(context.Background(), "blogs", jsonData, duration)
	return jsonData
}