import fastify from 'fastify';
import { DojosRoutes } from './routes/dojo.routes';
import { createConnectionDataBase } from './database/db';
import { createTableDojo, dojoModel } from './database/models/dojosModel';

createConnectionDataBase();
createTableDojo(dojoModel);

const app = fastify();

app.register(DojosRoutes, { prefix: 'dojos' });

export { app };
