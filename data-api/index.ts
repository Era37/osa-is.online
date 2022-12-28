import Fastify from "fastify";
import database from "./utils/database";
import dotenv from "dotenv";
import cors from "@fastify/cors";
dotenv.config({ path: "./.env" });

const server = Fastify();
const origin = process.env.SPACE === "dev" ? true : ["https://jessica-is.gay"]; //

server.setErrorHandler((error) => {
  console.log(error);
});
// Register route files
server.register(cors, {
  origin: true,
  allowedHeaders: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});
server.register(require("./routes/blogs"));
server.register(require("./routes/spotify"));

// Listening on port 8081, callback starts database connection
server.listen({ port: 80, host: "0.0.0.0" }, async () => {
  const { MONGO, REDIS } = process.env;
  await database.start({
    mongoURL: String(MONGO),
    redisURL: String(REDIS),
  });
  console.log("API is online! " + new Date(Date.now()));
});
