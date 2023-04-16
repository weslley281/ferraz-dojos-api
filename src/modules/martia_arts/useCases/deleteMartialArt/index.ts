import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { DeleteMartialArtController } from './DeleteMartialArtController';
import { DeleteMartialArtUseCase } from './DeleteMartialArtUseCase';

const martialArtRepository = MartialArtRepository.getInstance();
const deleteMartialArtUseCase = new DeleteMartialArtUseCase(
  martialArtRepository
);
const deleteMartialArtController = new DeleteMartialArtController(
  deleteMartialArtUseCase
);

export { deleteMartialArtController };
