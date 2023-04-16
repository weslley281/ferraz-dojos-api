import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { GetMartialArtByIdController } from './GetMartialArtByIdController';
import { GetMartialArtByIdUseCase } from './GetMartialArtByIdUseCase';

const graduationRepository = MartialArtRepository.getInstance();
const getMartialArtByIdUseCase = new GetMartialArtByIdUseCase(
  graduationRepository
);
const getMartialArtByIdController = new GetMartialArtByIdController(
  getMartialArtByIdUseCase
);

export { getMartialArtByIdController };
