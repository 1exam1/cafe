// @ts-check
import fastify from 'fastify';
import response from '../__fixtures__/cafes.js';

const server = () => {
  const app = fastify();

  app.get('/cafes', (_req, reply) => {
    reply.header('Access-Control-Allow-Origin', '*');

    reply.header('Content-Type', 'application/json; charset=utf-8').send(JSON.stringify(response));
  });

  return app;
};

const port = 3001;

server().listen({ port });
