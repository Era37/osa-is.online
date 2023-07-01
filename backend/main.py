from contextlib import asynccontextmanager
from datetime import date
from fastapi import FastAPI

app = FastAPI()


@asynccontextmanager
async def lifespan(app: FastAPI):
    pass


@app.get("/")
def home_index():
    return "You're lost aren't you"
