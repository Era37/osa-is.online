from fastapi import APIRouter, Header, status, Response
from utils.database import DatabaseAPI
from utils.objects import Blog, BlogPreview
from typing import Annotated
import os

router = APIRouter()

@router.post("/new")
async def new_blog(blog: Blog, token: Annotated[str | None, Header()], response: Response):
    if os.getenv("KEY") != token:
        response.status_code = 400
        return {"message": "Invalid Token"}
    err = await DatabaseAPI.insert("blogs", vars(blog), blog.url)
    if err:
        response.status_code = err["code"]
        return {"message": err["message"]}
    return {"message": "Success"}

@router.get("/blogs")
async def get_blogs():
    return Blog.build(await DatabaseAPI.get("blogs", {}, "blogs"))

@router.get("/blog/{id}")
async def get_blog(id):
    blog = Blog.build(await DatabaseAPI.get("blogs", {"url": id}, id))
    if len(blog) > 0:
        return blog[0]
    return {}