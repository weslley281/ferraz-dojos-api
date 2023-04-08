import { FastifyInstance } from 'fastify';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';
import { listDojoController } from '../modules/dojo/useCases/listaAllDojos';

export async function DojosRoutes(app: FastifyInstance) {
  app.get('/', async (request, responce) => {
    listDojoController.handle(request, responce);
  });

  app.post('/', async (request, responce) => {
    createDojoController.handle(request, responce);
  });

  app.put('/', async (request, responce) => {
    updateDojoController.handle(request, responce);
  });
}
