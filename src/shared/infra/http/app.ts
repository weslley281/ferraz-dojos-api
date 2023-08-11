//Data Base
import { createConnectionDataBase } from '@database/db';
import { createTableDojo } from '@database/models/dojosModel';
import { createTableGraduation } from '@database/models/graduationsModel';
import { createTableGraduation_instructor } from '@database/models/graduations_instructorsModel';
import { createTableGraduation_student } from '@database/models/graduations_studentsModel';
import { createTableInstructor } from '@database/models/instructorsModel';
import { createTableMartial_art } from '@database/models/martial_art';
import { createTableStudent } from 'database/models/studentsModel';

//express
import express, { NextFunction, Request, Response } from 'express';

//Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerFile from "../../../swagger.json";

//Erros
import { AppError } from '@shared/erros/AppError';

//Routes
import { dojosRoutes } from './routes/dojo.routes';
import { graduationsRoutes } from './routes/graduation.routes';
import { instructorsRoutes } from './routes/instructor.routes';
import { studentsRoutes } from './routes/student.routes';
import { graduations_instructorRoutes } from './routes/graduation_instructor.routes';
import { graduations_studentRoutes } from './routes/graduation_student.routes';
import { martialArtsRoutes } from './routes/martial_art.routes';

createConnectionDataBase();
createTableDojo();
createTableGraduation();
createTableInstructor();
createTableStudent();
createTableGraduation_instructor();
createTableGraduation_student();
createTableMartial_art();

const app = express();

app.use(express.json());

app.use('/dojos', dojosRoutes);
app.use('/graduations', graduationsRoutes);
app.use('/instructors', instructorsRoutes);
app.use('/students', studentsRoutes);
app.use('/graduations_instructor', graduations_instructorRoutes);
app.use('/graduations_student', graduations_studentRoutes);
app.use('/martial_art', martialArtsRoutes);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  response.header(
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
