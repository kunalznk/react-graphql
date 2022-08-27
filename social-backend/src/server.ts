import { mo } from "./db/minio";
import { verfiyToken, handleError } from "./utils/common";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import { readFileSync } from "fs";
import { join } from "path";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyMiddleware } from "graphql-middleware";

const typeDefs = readFileSync(
  join(__dirname, "schema/schema.graphql"),
  "utf-8"
);
import permissions from "./utils/permission";
// import typeDefs from "./schema";

import resolvers from "./resolvers";
import prisma from "./db/prisma";

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  schema: applyMiddleware(schema, permissions),
  context: ({ req }) => {
    let user = null;
    if (req.headers.authorization) {
      user = verfiyToken(req.headers.authorization!);
    }
    return {
      prisma,
      user,
    };
  },
  introspection: true,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(() => {
  server.applyMiddleware({ app });
});

httpServer.listen({ port: process.env.PORT }, () => {
  console.log(
    `🚀 Server ready at http://${process.env.DOMAIN}:${process.env.PORT}${server.graphqlPath}`
  );
});

(async () => {})();
// const exec = async () => {
//   try {
//     const post = await prisma.post.create({
//       data: {
//         title: "post1",
//         content: "post content",
//         authorId: 1,
//       },
//     });
//   } catch (e) {
//     console.error(e);
//     // handleError()
//   }
// };

// Adding s3 bucket for media
//ploicy for s3 bucket
// node mailer to send Mail
