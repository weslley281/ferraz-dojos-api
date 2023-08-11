import { Router, Request, Response } from 'express';
import { createGraduation_studentController } from '../../../../modules/graduation_students/useCases/createGraduation_student';
import { updateGraduation_studentController } from '../../../../modules/graduation_students/useCases/updateGraduation_student';
import { listGraduation_studentController } from '../../../../modules/graduation_students/useCases/listaAllGraduations_student';
import { getGraduation_studentByIdController } from '../../../../modules/graduation_students/useCases/getGraduation_studentById';
import { deleteGraduation_studentController } from '../../../../modules/graduation_students/useCases/deleteGraduation_student';

const graduations_studentRoutes = Router();

// graduationsRoutes.use(ensureAuthenticated);

graduations_studentRoutes.post(
  '/create',
  (request: Request, response: Response) => {
    createGraduation_studentController.handle(request, response);
  }
);

graduations_studentRoutes.put(
  '/update',
  (request: Request, response: Response) => {
    updateGraduation_studentController.handle(request, response);
  }
);

graduations_studentRoutes.get(
  '/all/:id_student',
  (request: Request, response: Response) => {
    listGraduation_studentController.handle(request, response);
  }
);

graduations_studentRoutes.get(
  '/id/:id_graduation_student',
  (request: Request, response: Response) => {
    getGraduation_studentByIdController.handle(request, response);
  }
);

graduations_studentRoutes.delete(
  '/delete/:id_graduation_student',
  (request, response) => {
    deleteGraduation_studentController.handle(request, response);
  }
);
export { graduations_studentRoutes };
