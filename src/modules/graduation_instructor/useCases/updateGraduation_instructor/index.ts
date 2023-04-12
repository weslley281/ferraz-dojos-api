import { GraduationRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { UpdateGraduationController } from './UpdateGraduation_instructorController';
import { UpdateGraduationUseCase } from './UpdateGraduation_instructorUseCase';

const graduationRepository = GraduationRepository.getInstance();
const updateGraduationUseCase = new UpdateGraduationUseCase(
  graduationRepository
);
const updateGraduationController = new UpdateGraduationController(
  updateGraduationUseCase
);

export { updateGraduationController };
