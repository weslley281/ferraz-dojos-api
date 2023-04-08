import express from 'express';
import { createConnectionDataBase } from './database/db';
import { createTableDojo, dojoModel } from './database/models/dojosModel';
import { dojosRoutes } from './routes/dojo.routes';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import swaggerFile from './swagger.json';

createConnectionDataBase();
createTableDojo(dojoModel);

const app = express();

app.use(express.json());

app.use('/dojos', dojosRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

export { app };
