import { FastifyPluginAsync, FastifyInstance } from "fastify";
import { BlogPreview } from "../utils/interfaces";
import Db from "../utils/database";
import fp from "fastify-plugin";

const blogs: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get("/blogs", async (req, res): Promise<Array<BlogPreview>> => {
        const blogPreviewArray: Array<BlogPreview> = [];
        await Db.mongo.collection("blogs").find({}).forEach((blog) => {
            const { date, est_read_time, title, emoji, description, url } = blog;
            blogPreviewArray.push({
                date,
                est_read_time,
                title,
                emoji,
                description,
                url
            });
        });
        return blogPreviewArray;
    });
};

export default fp(blogs);