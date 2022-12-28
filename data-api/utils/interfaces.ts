import { Filter, Document } from "mongodb";

export interface DatabaseKeys {
  mongoURL: string;
  redisURL: string;
}

export interface BlogPreview {
  title: string;
  url: string;
}

export interface Blog extends BlogPreview {
  content: string;
  date: number;
  description: string;
}

interface TailwindConfigContent {
  raw: string;
  extension: string;
}

export interface TailwindConfig {
  content: Array<TailwindConfigContent>;
}

export interface cacheFuncOptions {
  key: string;
  dataSchema: Filter<Document>;
}
