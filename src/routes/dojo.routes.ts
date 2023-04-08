import { Router } from 'express';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';
import { listDojoController } from '../modules/dojo/useCases/listaAllDojos';

const dojosRoutes = Router();

dojosRoutes.get('/', async (request, responce) => {
  listDojoController.handle(request, responce);
});

dojosRoutes.post('/', async (request, responce) => {
  createDojoController.handle(request, responce);
});

dojosRoutes.put('/', async (request, responce) => {
  updateDojoController.handle(request, responce);
});

export { dojosRoutes };
