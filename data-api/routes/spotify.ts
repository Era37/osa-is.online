import fp from "fastify-plugin";
import Spotify from "../utils/spotify";
import { FastifyPluginAsync, FastifyInstance } from "fastify";
import Db from "../utils/database";

const spotify: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get("/spotifySongs", async (req, res) => {
        const playlistId = "6onj45lQm8DiLFT8nQQCOj";
        let data: any;
        const potential_array = await Db.redis.get(playlistId);
        if (!potential_array) {
            data = ((await Spotify.getTracks(playlistId)).items.reverse()).slice(0, 5);
            await Db.redis.set(playlistId, JSON.stringify(data), { EX: 300 });
        } else data = JSON.parse(potential_array);
        return data;
    });
};

export default fp(spotify);