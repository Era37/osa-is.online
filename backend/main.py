from fastapi import FastAPI
from utils.database import DatabaseAPI, Database
from dotenv import load_dotenv

#endpoints
from endpoints import blogs

app = FastAPI()
app.include_router(blogs.router)

@app.on_event("startup")
async def startup():
    load_dotenv("./.env")
    await Database.registerDatabase()

