import Db from "./database";
import { cacheFuncOptions } from "./interfaces";

export async function cacheData(options: cacheFuncOptions): Promise<any> {
    const { mongo, redis } = Db;
    const { key, dataSchema } = options;
    let cleanData : string;
    const potentialData: string | null = process.env.CACHE === "FALSE" ? null : await redis.get(key);
    if (!potentialData) {
        let data: any = await mongo.collection("blogs").find(dataSchema).toArray();
        if (!data) {
            return false
        } else {
            await redis.set(key, JSON.stringify(data), { EX: 60 });
            cleanData = JSON.stringify(data);
        };
    } else cleanData = potentialData;
    return JSON.parse(cleanData);
}