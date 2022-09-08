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