import { createClient, RedisClientType } from "redis";
import { MongoClient, Db } from "mongodb";
import { DatabaseKeys } from "./interfaces";

export default class Database {
    static redis: RedisClientType;
    static mongo: Db;

    static async start(options: DatabaseKeys) {
        const { mongoURL, redisURL } = options;
        this.mongo = (await new MongoClient(mongoURL).connect()).db("portfolio");
        this.redis = createClient({
            url: redisURL,
        });
        await this.redis.connect();
    };
};