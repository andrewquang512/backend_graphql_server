// Apollo
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import {
  startServerAndCreateLambdaHandler,
  handlers,
} from '@as-integrations/aws-lambda';
// Prisma
import { prisma } from './prisma/database.js';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';
import http from 'http';
// Type definitions and resolvers
import typeDefs from './Type_Definitions/_typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import { loggingPlugin } from './logging.js';
// Websocket
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { makeExecutableSchema } from '@graphql-tools/schema';

const app = express();
const httpServer = http.createServer(app);

// Creating the WebSocket server
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/',
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  context: () => {
    return {
      prisma,
    };
  },
  introspection: true,
  csrfPrevention: true,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({
      embed: true,
    }),
    ...(parseInt(process.env.IS_LOGGING) ? [loggingPlugin] : []),
    ApolloServerPluginDrainHttpServer({
      httpServer,
    }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  logger: console,
});

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    middleware: [
      async (event, lambdaContext, callback) => {
        console.log('###? received event' + JSON.stringify(event));
        // Handle CORS preflight request
        if (event.httpMethod === 'OPTIONS') {
          console.log('###? received event OPTIONS' + JSON.stringify(event));
          const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials': true,
              'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
            body: '',
          };
          return response;
        }
      },
    ],
    cors: {
      origin: '*',
    },
  },
);
