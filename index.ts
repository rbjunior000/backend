import fastify from "fastify";
import cors from "@fastify/cors";

import { getStarwarsCharacterService } from "./service";

const server = fastify();
server.register(cors);

server.get("/characters", async () => {
  const result = await getStarwarsCharacterService();
  return result;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
