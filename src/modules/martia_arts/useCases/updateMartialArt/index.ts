import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { UpdateMartialArtController } from './UpdateMartialArtController';
import { UpdateMartialArtUseCase } from './UpdateMartialArtUseCase';

const martialArtRepository = MartialArtRepository.getInstance();
const updateMartialArtUseCase = new UpdateMartialArtUseCase(
  martialArtRepository
);
const updateMartialArtController = new UpdateMartialArtController(
  updateMartialArtUseCase
);

export { updateMartialArtController };
