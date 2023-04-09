import { GraduationRepository } from '../../repositories/implementations/GraduationRepository';
import { UpdateGraduationController } from './UpdateGraduationController';
import { UpdateGraduationUseCase } from './UpdateGraduationUseCase';

const graduationRepository = GraduationRepository.getInstance();
const updateGraduationUseCase = new UpdateGraduationUseCase(
  graduationRepository
);
const updateGraduationController = new UpdateGraduationController(
  updateGraduationUseCase
);

export { updateGraduationController };
