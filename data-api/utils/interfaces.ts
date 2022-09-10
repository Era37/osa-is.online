import { Filter, Document } from "mongodb";

export interface DatabaseKeys {
    mongoURL: string,
    redisURL: string
};

export interface BlogPreview {
    title: string,
    emoji: string,
    date: number,
    url: string,
    description: string,
    est_read_time: string,
};

export interface Blog extends BlogPreview {
    content: string
};

interface TailwindConfigContent {
    raw: string,
    extension: string,
};

export interface TailwindConfig {
    content: Array<TailwindConfigContent>
};

export interface cacheFuncOptions {
    key: string,
    dataSchema: Filter<Document>,
}