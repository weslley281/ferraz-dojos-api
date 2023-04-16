import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { CreateMartialArtController } from './CreateMartialArtController';
import { CreateMartialArtUseCase } from './CreateMartialArtUseCase';

const martialArtRepository = MartialArtRepository.getInstance();
const createMartialArtUseCase = new CreateMartialArtUseCase(
  martialArtRepository
);
const createMartialArtController = new CreateMartialArtController(
  createMartialArtUseCase
);

export { createMartialArtController };
