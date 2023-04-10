import express, { NextFunction, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import { createConnectionDataBase } from './database/db';
import { createTableDojo, dojoModel } from './database/models/dojosModel';
import { dojosRoutes } from './routes/dojo.routes';
import swaggerFile from './swagger.json';
import { AppError } from './modules/erros/Error';
import { graduationsRoutes } from './routes/graduation.routes';
import {
  createTableGraduation,
  graduationModel,
} from './database/models/graduationsModel';
import { instructorsRoutes } from './routes/instructor.routes';

createConnectionDataBase();
createTableDojo(dojoModel);
createTableGraduation(graduationModel);

const app = express();

app.use(express.json());

app.use('/dojos', dojosRoutes);
app.use('/graduations', graduationsRoutes);
app.use('/instructors', instructorsRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ error: error.message });
    }

    return response.status(500).json({ error: error.message || error.stack });
  }
);

export { app };