import { MartialArtRepository } from '../../repositories/implementations/MartialArtRepository';
import { GetMartialArtByNameController } from './GetMartialArtByNameController';
import { GetMartialArtByNameUseCase } from './GetMartialArtByNameUseCase';

const graduationRepository = MartialArtRepository.getInstance();
const getMartialArtByNameUseCase = new GetMartialArtByNameUseCase(
  graduationRepository
);
const getMartialArtByNameController = new GetMartialArtByNameController(
  getMartialArtByNameUseCase
);

export { getMartialArtByNameController };
