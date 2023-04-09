import { Router } from 'express';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';
import { listDojoController } from '../modules/dojo/useCases/listaAllDojos';
import { getDojoByIdController } from '../modules/dojo/useCases/getDojoById';
import { getDojoByEmailController } from '../modules/dojo/useCases/getDojoByEmail';
import { deleteDojoController } from '../modules/dojo/useCases/deleteDojo';
import { authenticateController } from '../modules/dojo/useCases/authenticate';
import { verifyJWT } from '../middlewares/authentication';

const dojosRoutes = Router();

dojosRoutes.post('/create', (request, response) => {
  createDojoController.handle(request, response);
});

dojosRoutes.post('/login', (request, response) => {
  authenticateController.handle(request, response);
});

dojosRoutes.put('/update', verifyJWT, (request, response) => {
  updateDojoController.handle(request, response);
});

dojosRoutes.get('/all', (request, response) => {
  listDojoController.handle(request, response);
});

dojosRoutes.get('/id/:id_dojo', (request, response) => {
  getDojoByIdController.handle(request, response);
});

dojosRoutes.get('/email/:email', (request, response) => {
  getDojoByEmailController.handle(request, response);
});

dojosRoutes.delete('/delete/:id_dojo', (request, response) => {
  deleteDojoController.handle(request, response);
});
export { dojosRoutes };
