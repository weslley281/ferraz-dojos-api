import { Router, Request, Response } from 'express';
import { ensureAuthenticated } from '../middlewares/authentication';
import { createMartialArtController } from '../../../../modules/martia_arts/useCases/createMartialArt';
import { updateMartialArtController } from '../../../../modules/martia_arts/useCases/updateMartialArt';
import { listMartialArtController } from '../../../../modules/martia_arts/useCases/listaAllMartialArts';
import { getMartialArtByIdController } from '../../../../modules/martia_arts/useCases/getMartialArtById';
import { deleteMartialArtController } from '../../../../modules/martia_arts/useCases/deleteMartialArt';
import { getMartialArtByNameController } from '../../../../modules/martia_arts/useCases/getMartialArtByName';

const martialArtsRoutes = Router();

//martialArtsRoutes.use(ensureAuthenticated);

martialArtsRoutes.post('/create', (request: Request, response: Response) => {
  createMartialArtController.handle(request, response);
});

martialArtsRoutes.put('/update', (request: Request, response: Response) => {
  updateMartialArtController.handle(request, response);
});

martialArtsRoutes.get(
  '/all/:id_dojo',
  (request: Request, response: Response) => {
    listMartialArtController.handle(request, response);
  }
);

martialArtsRoutes.get(
  '/name/:martial_art',
  (request: Request, response: Response) => {
    getMartialArtByNameController.handle(request, response);
  }
);

martialArtsRoutes.get(
  '/id/:id_graduation',
  (request: Request, response: Response) => {
    getMartialArtByIdController.handle(request, response);
  }
);

martialArtsRoutes.delete('/delete/:id_graduation', (request, response) => {
  deleteMartialArtController.handle(request, response);
});
export { martialArtsRoutes };
