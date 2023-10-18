// Apollo
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';
// Prisma
import { PrismaClient } from '@prisma/client';
// Type definitions and resolvers
import typeDefs from './Type_Definitions/_typeDefs.js';
import resolvers from './resolvers/resolvers.js';
import { loggingPlugin } from './logging.js';

// Construct a schema, using GraphQL schema language
const prisma = new PrismaClient({
  ...(parseInt(process.env.IS_LOGGING) && {
    log: ['query', 'info', 'warn', 'error'],
  }),
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault,
    ...(parseInt(process.env.IS_LOGGING) ? [loggingPlugin] : []),
  ],
  logger: console,
});

export const handler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    middleware: [
      async (event) => {
        console.log('###? received event=' + JSON.stringify(event))
      }
    ]
}
);

