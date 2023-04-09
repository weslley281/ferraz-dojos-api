import { Router, Request, Response } from 'express';
import { createGraduationController } from '../modules/graduation/useCases/createGraduation';
import { updateGraduationController } from '../modules/graduation/useCases/updateGraduation';
import { listGraduationController } from '../modules/graduation/useCases/listaAllGraduations';
import { deleteGraduationController } from '../modules/graduation/useCases/deleteGraduation';
import { ensureAuthenticated } from '../middlewares/authentication';

const dojosRoutes = Router();

dojosRoutes.use(ensureAuthenticated);

dojosRoutes.post('/create', (request: Request, response: Response) => {
  createGraduationController.handle(request, response);
});

dojosRoutes.put('/update', (request: Request, response: Response) => {
  updateGraduationController.handle(request, response);
});

dojosRoutes.get('/all/:id_dojo', (request: Request, response: Response) => {
  listGraduationController.handle(request, response);
});

dojosRoutes.get(
  '/id/:id_graduation',
  (request: Request, response: Response) => {
    createGraduationController.handle(request, response);
  }
);

dojosRoutes.delete('/delete/:id_graduation', (request, response) => {
  deleteGraduationController.handle(request, response);
});
export { dojosRoutes };
