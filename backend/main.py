from fastapi import FastAPI
from utils.database import Database
from dotenv import load_dotenv
import asyncio
import sys
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

# endpoints
from endpoints import blogs, spotify

app = FastAPI()
app.include_router(blogs.router)
app.include_router(spotify.router)
app.add_middleware(CORSMiddleware, allow_origins=[
                   "https://jessica-is.online", "http://localhost:3000"], allow_credentials=True)


@app.on_event("startup")
async def startup():
    load_dotenv("./.env")
    await Database.registerDatabase()

if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    uvicorn.run("main:app", port=80, host="0.0.0.0", reload=True)
