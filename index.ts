import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import {authors, notes} from '~/mock';
import {readFileSync} from 'fs';
import {MangoContext} from '~/shared/types';

const typeDefs = readFileSync('./schema.graphql', {encoding: 'utf-8'});

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<MangoContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});
await server.start();

app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async () => ({data: {authors, notes}}),
  }),
);

await new Promise(() => httpServer.listen({port: process.env.PORT}));

console.log(`🚀 Server ready at http://localhost:${process.env.PORT}`);
