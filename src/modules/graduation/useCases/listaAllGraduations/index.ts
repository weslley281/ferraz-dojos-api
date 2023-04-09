import { GraduationRepository } from '../../repositories/implementations/GraduationRepository';
import { ListGraduationController } from './ListGraduationController';
import { ListGraduationUseCase } from './ListGraduationUseCase';

const graduationRepository = GraduationRepository.getInstance();
const listGraduationUseCase = new ListGraduationUseCase(graduationRepository);
const listGraduationController = new ListGraduationController(
  listGraduationUseCase
);

export { listGraduationController };
