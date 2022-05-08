import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";

import typeDefs from "./schema";
import Query from "./Resolvers/Query";
import Mutation from "./Resolvers/Mutatation";

import User from "./Resolvers/User";
import Post from "./Resolvers/Post";
import Comment from "./Resolvers/Comment";

import prisma from "./db/prisma";

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
    Query,
    User,
    Post,
    Comment,
  },
  context: {
    prisma,
  },
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

const exec = async () => {
  try {
    const post = await prisma.post.create({
      data: {
        title: "post1",
        content: "post content",
        authorId: 1,
      },
    });
  } catch (e) {
    console.error(e);
    // handleError()
  }
};
