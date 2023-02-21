import http from 'http';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';

import DBClient, {DBContext} from '~/db';
import resolvers from '~/resolvers';
import typeDefs from '~/shared/types/schema.gql';

export const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<DBContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
  });
  await server.start();

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async () => DBClient,
    }),
  );

  await new Promise(() => {
    httpServer.listen({port: process.env.PORT});
    console.log(
      `Example app listening on http://localhost:${process.env.PORT}/`,
    );
  });
};
