import { Router, Request, Response } from 'express';
import { ensureAuthenticated } from '../middlewares/authentication';
import { createInstructorController } from '../modules/instructor/useCases/createInstructor';
import { updateInstructorController } from '../modules/instructor/useCases/updateInstructor';
import { listInstructorController } from '../modules/instructor/useCases/listAllInstructors';
import { getInstructorByIdController } from '../modules/instructor/useCases/getInstructorById';
import { deleteInstructorController } from '../modules/instructor/useCases/deleteInstructor';
import { getInstructorByEmailController } from '../modules/instructor/useCases/getInstructorByEmail';

const instructorsRoutes = Router();

// instructorsRoutes.use(ensureAuthenticated);

instructorsRoutes.post('/create', (request: Request, response: Response) => {
  createInstructorController.handle(request, response);
});

instructorsRoutes.put('/update', (request: Request, response: Response) => {
  updateInstructorController.handle(request, response);
});

instructorsRoutes.get(
  '/all/:id_dojo',
  (request: Request, response: Response) => {
    listInstructorController.handle(request, response);
  }
);

instructorsRoutes.get(
  '/id/:id_instructor',
  (request: Request, response: Response) => {
    getInstructorByIdController.handle(request, response);
  }
);

instructorsRoutes.get(
  '/email/:email',
  (request: Request, response: Response) => {
    getInstructorByEmailController.handle(request, response);
  }
);

instructorsRoutes.delete('/delete/:id_instructor', (request, response) => {
  deleteInstructorController.handle(request, response);
});
export { instructorsRoutes };
