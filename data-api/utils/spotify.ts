import axios from "axios";
import qs from "qs";

export default class Spotify {
    static time: number;
    static token: string;

    static async tokenFetch(): Promise<string> {
        const { SPOTIFY_SECRET, SPOTIFY_ID } = process.env;
        const request_data = ((Buffer.from(SPOTIFY_ID + ":" + SPOTIFY_SECRET, 'utf-8')).toString('base64'));
        this.time = Date.now();
        this.token = (await axios({
            url: "https://accounts.spotify.com/api/token",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Basic ${request_data}`,
            },
            data: qs.stringify({
                "grant_type": "client_credentials"
            })
        })).data.access_token;
        return this.token;
    };

    static async getToken(): Promise<string> {
        return this.time > Date.now() ?
            this.token :
            await this.tokenFetch();
    };

    static async getTracks(playlistId: string): Promise<any> {
        const token = await this.getToken();
        return (await axios({
            url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })).data;
    };
}