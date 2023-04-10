import { Router, Request, Response } from 'express';
import { ensureAuthenticated } from '../middlewares/authentication';
import { createStudentController } from '../modules/student/useCases/createStudent';
import { updateStudentController } from '../modules/student/useCases/updateStudent';
import { listStudentController } from '../modules/student/useCases/listAllStudent';
import { getStudentByIdController } from '../modules/student/useCases/getStudentById';
import { getStudentByEmailController } from '../modules/student/useCases/getStudentByEmail';
import { deleteStudentController } from '../modules/student/useCases/deleteStudent';

const studentsRoutes = Router();

// instructorsRoutes.use(ensureAuthenticated);

studentsRoutes.post('/create', (request: Request, response: Response) => {
  createStudentController.handle(request, response);
});

studentsRoutes.put('/update', (request: Request, response: Response) => {
  updateStudentController.handle(request, response);
});

studentsRoutes.get('/all/:id_dojo', (request: Request, response: Response) => {
  listStudentController.handle(request, response);
});

studentsRoutes.get(
  '/id/:id_student',
  (request: Request, response: Response) => {
    getStudentByIdController.handle(request, response);
  }
);

studentsRoutes.get('/email/:email', (request: Request, response: Response) => {
  getStudentByEmailController.handle(request, response);
});

studentsRoutes.delete('/delete/:id_student', (request, response) => {
  deleteStudentController.handle(request, response);
});
export { studentsRoutes };
