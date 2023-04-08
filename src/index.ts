import express from 'express';
import { createConnectionDataBase } from './database/db';
import { createTableDojo, dojoModel } from './database/models/dojosModel';
import { dojosRoutes } from './routes/dojo.routes';

createConnectionDataBase();
createTableDojo(dojoModel);

const app = express();

app.use('/dojos', dojosRoutes);

export { app };
