import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { ListMartialArtController } from './ListMartialArtController';
import { ListMartialArtUseCase } from './ListMartialArtUseCase';

const martialArtRepository = MartialArtRepository.getInstance();
const listMartialArtUseCase = new ListMartialArtUseCase(martialArtRepository);
const listMartialArtController = new ListMartialArtController(
  listMartialArtUseCase
);

export { listMartialArtController };
