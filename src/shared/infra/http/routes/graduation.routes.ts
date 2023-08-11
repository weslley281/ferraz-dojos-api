import { Router, Request, Response } from 'express';
import { createGraduationController } from '../../../../modules/graduation/useCases/createGraduation';
import { updateGraduationController } from '../../../../modules/graduation/useCases/updateGraduation';
import { listGraduationController } from '../../../../modules/graduation/useCases/listaAllGraduations';
import { deleteGraduationController } from '../../../../modules/graduation/useCases/deleteGraduation';
import { ensureAuthenticated } from '../middlewares/authentication';
import { getGraduationByIdController } from '../../../../modules/graduation/useCases/getGraduationById';

const graduationsRoutes = Router();

// graduationsRoutes.use(ensureAuthenticated);

graduationsRoutes.post('/create', (request: Request, response: Response) => {
  createGraduationController.handle(request, response);
});

graduationsRoutes.put('/update', (request: Request, response: Response) => {
  updateGraduationController.handle(request, response);
});

graduationsRoutes.get(
  '/all/:id_dojo',
  (request: Request, response: Response) => {
    listGraduationController.handle(request, response);
  }
);

graduationsRoutes.get(
  '/id/:id_graduation',
  (request: Request, response: Response) => {
    getGraduationByIdController.handle(request, response);
  }
);

graduationsRoutes.delete('/delete/:id_graduation', (request, response) => {
  deleteGraduationController.handle(request, response);
});
export { graduationsRoutes };
