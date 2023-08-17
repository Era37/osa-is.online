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
                   "https://jessica-is.online", "http://localhost:8081"], allow_credentials=True)


@app.on_event("startup")
async def startup():
    load_dotenv("./.env")
    await Database.registerDatabase()
    async with Database.pgConn.connection() as conn:
        async with conn.cursor() as cur:
            await cur.execute(f"SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = %s)", ("blogs",))
            result = await cur.fetchone()
            print(result[0])
            if result[0] == False:
                await cur.execute("CREATE TABLE blogs (date bigint, title varchar(255), url varchar(255), content varchar);")

if __name__ == "__main__":
    if sys.platform == "win32":
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    uvicorn.run("main:app", port=80, host="0.0.0.0", reload=True)
