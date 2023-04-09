import { Router, Request, Response } from 'express';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';
import { listDojoController } from '../modules/dojo/useCases/listaAllDojos';
import { getDojoByIdController } from '../modules/dojo/useCases/getDojoById';
import { getDojoByEmailController } from '../modules/dojo/useCases/getDojoByEmail';
import { deleteDojoController } from '../modules/dojo/useCases/deleteDojo';
import { authenticateController } from '../modules/dojo/useCases/authenticate';
import { ensureAuthenticated } from '../middlewares/authentication';

const dojosRoutes = Router();

dojosRoutes.post('/create', (request: Request, response: Response) => {
  createDojoController.handle(request, response);
});

dojosRoutes.post('/login', (request: Request, response: Response) => {
  authenticateController.handle(request, response);
});

dojosRoutes.put(
  '/update',
  ensureAuthenticated,
  (request: Request, response: Response) => {
    updateDojoController.handle(request, response);
  }
);

dojosRoutes.get(
  '/all',
  ensureAuthenticated,
  (request: Request, response: Response) => {
    listDojoController.handle(request, response);
  }
);

dojosRoutes.get('/id/:id_dojo', (request: Request, response: Response) => {
  getDojoByIdController.handle(request, response);
});

dojosRoutes.get('/email/:email', (request: Request, response: Response) => {
  getDojoByEmailController.handle(request, response);
});

dojosRoutes.delete('/delete/:id_dojo', (request, response) => {
  deleteDojoController.handle(request, response);
});
export { dojosRoutes };
