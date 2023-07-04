
from os import getenv as ge
import httpx
import time
from utils.database import Database, EXPIRE
from typing import List


class Track:
    name: str
    artists: str
    url: str

    def __init__(self, name, artists, url):
        self.name = name
        self.artists = artists
        self.url = url


class SpotifyToken:
    bearer = None
    expire = 0

    @staticmethod
    async def cache(k: str, tracks: List[Track]):
        dict_tracks = []
        for track in tracks:
            dict_tracks.append(vars(track))
        await Database.redisConn.set(k, str(dict_tracks), EXPIRE)

    @staticmethod
    async def genToken():
        SpotifyToken.expire = time.time() + 3600
        SPOTIFY_CLIENT, SPOTIFY_SECRET = ge(
            "SPOTIFY_CLIENT"), ge("SPOTIFY_SECRET")
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://accounts.spotify.com/api/token",
                headers={"Content-Type": "application/x-www-form-urlencoded"},
                data={"grant_type": "client_credentials",
                      "client_id": SPOTIFY_CLIENT, "client_secret": SPOTIFY_SECRET}
            )
            response_json = response.json()
            SpotifyToken.bearer = response_json["access_token"]

    @staticmethod
    async def getTracks(items: int) -> List[Track]:
        if time.time() >= SpotifyToken.expire:
            await SpotifyToken.genToken()
        async with httpx.AsyncClient() as client:
            redis_data = await Database.redisConn.get("tracks")
            if redis_data:
                converted_list = eval(redis_data)
                return converted_list[-items:]
            response = await client.get("https://api.spotify.com/v1/playlists/6onj45lQm8DiLFT8nQQCOj/tracks", headers={"Authorization": f"Bearer {SpotifyToken.bearer}"})
            response_json = response.json()
            tracks = []
            for track in response_json["items"]:
                track_indexed = track["track"]
                artists = ""
                for artist in track_indexed["artists"]:
                    artists += f"{artist['name']}, "
                artists = artists[:-2]
                tracks.append(
                    Track(track_indexed["name"], artists, track_indexed["external_urls"]["spotify"]))
            await SpotifyToken.cache("tracks", tracks[-items:])
            return tracks[-items:]
