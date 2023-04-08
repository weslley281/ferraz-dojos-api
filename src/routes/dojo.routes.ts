import { Router } from 'express';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';
import { listDojoController } from '../modules/dojo/useCases/listaAllDojos';

const dojosRoutes = Router();

dojosRoutes.post('/create', (request, response) => {
  createDojoController.handle(request, response);
});

dojosRoutes.get('/all', (request, responce) => {
  listDojoController.handle(request, responce);
});

dojosRoutes.put('/update', (request, responce) => {
  updateDojoController.handle(request, responce);
});

export { dojosRoutes };
