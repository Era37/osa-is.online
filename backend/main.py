from fastapi import FastAPI
from utils.database import Database
from dotenv import load_dotenv


app = FastAPI()


@app.on_event("startup")
async def startup():
    print("asdasd")
    load_dotenv("./.env")
    await Database.registerDatabase()


@app.get("/")
def home_index():
    return "You're lost aren't you"
