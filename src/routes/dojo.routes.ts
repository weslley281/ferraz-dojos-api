import { FastifyInstance } from 'fastify';
import { createDojoController } from '../modules/dojo/useCases/createDojo';
import { updateDojoController } from '../modules/dojo/useCases/updateDojo';

export async function DojosRoutes(app: FastifyInstance) {
  app.post('/', async (request, responce) => {
    createDojoController.handle(request, responce);
  });

  app.put('/', async (request, responce) => {
    updateDojoController.handle(request, responce);
  });
}
