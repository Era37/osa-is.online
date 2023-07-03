from fastapi import FastAPI
from utils.database import Database
from dotenv import load_dotenv
import asyncio
import sys
import uvicorn

# endpoints
from endpoints import blogs, spotify

app = FastAPI()
app.include_router(blogs.router)
app.include_router(spotify.router)


@app.on_event("startup")
async def startup():
    load_dotenv("./.env")
    await Database.registerDatabase()

if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    uvicorn.run("main:app", port=80, reload=True)
