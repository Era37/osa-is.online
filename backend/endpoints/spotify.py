from fastapi import APIRouter
from utils.spotify import SpotifyToken

router = APIRouter()


@router.get("/spotify")
async def spotify():
    return await SpotifyToken.getTracks(5)
