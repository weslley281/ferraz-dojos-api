import { GraduationRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { ListGraduationController } from './ListGraduation_instructorController';
import { ListGraduationUseCase } from './ListGraduation_instructorUseCase';

const graduationRepository = GraduationRepository.getInstance();
const listGraduationUseCase = new ListGraduationUseCase(graduationRepository);
const listGraduationController = new ListGraduationController(
  listGraduationUseCase
);

export { listGraduationController };
