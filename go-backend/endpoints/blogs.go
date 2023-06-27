package blogs

import "github.com/gin-gonic/gin"

type Blog struct {
	content     string
	date        int64
	description string
	title       string
	url         string
}

type BlogPreview struct {
	title string
	url   string
}

func NewBlog(c *gin.Context) {

}
