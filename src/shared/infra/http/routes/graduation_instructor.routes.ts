import { Router, Request, Response } from 'express';
import { createGraduation_instructorController } from '../../../../modules/graduation_instructor/useCases/createGraduation_instructor';
import { deleteGraduation_instructorController } from '../../../../modules/graduation_instructor/useCases/deleteGraduation_instructor';
import { getGraduation_instructorByIdController } from '../../../../modules/graduation_instructor/useCases/getGraduation_instructorById';
import { listGraduation_instructorController } from '../../../../modules/graduation_instructor/useCases/listaAllGraduations_instructors';
import { updateGraduation_instructorController } from '../../../../modules/graduation_instructor/useCases/updateGraduation_instructor';

const graduations_instructorRoutes = Router();

// graduationsRoutes.use(ensureAuthenticated);

graduations_instructorRoutes.post(
  '/create',
  (request: Request, response: Response) => {
    createGraduation_instructorController.handle(request, response);
  }
);

graduations_instructorRoutes.put(
  '/update',
  (request: Request, response: Response) => {
    updateGraduation_instructorController.handle(request, response);
  }
);

graduations_instructorRoutes.get(
  '/all/:id_instructor',
  (request: Request, response: Response) => {
    listGraduation_instructorController.handle(request, response);
  }
);

graduations_instructorRoutes.get(
  '/id/:id_graduation_instructor',
  (request: Request, response: Response) => {
    getGraduation_instructorByIdController.handle(request, response);
  }
);

graduations_instructorRoutes.delete(
  '/delete/:id_graduation_instructor',
  (request, response) => {
    deleteGraduation_instructorController.handle(request, response);
  }
);
export { graduations_instructorRoutes };
