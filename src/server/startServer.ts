import http from 'http';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';

import DBClient, {AUTHOR_IDS, NOTE_IDS, DBContext} from '~/shared/db';
import resolvers from '~/resolvers';
import typeDefs from '~/shared/types/schema.gql';

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const startServer = async () => {
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

    console.log(`Example app listening on port ${process.env.PORT}`);
    console.log(`AUTHOR_IDS: ${JSON.stringify(AUTHOR_IDS, null, 2)}`);
    console.log(`NOTE_IDS: ${JSON.stringify(NOTE_IDS, null, 2)}`);
  });
};

export default startServer;
