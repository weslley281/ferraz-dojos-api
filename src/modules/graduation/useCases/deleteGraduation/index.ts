import { GraduationRepository } from '../../repositories/implementations/GraduationRepository';
import { DeleteGraduationController } from './DeleteGraduationController';
import { DeleteGraduationUseCase } from './DeleteGraduationUseCase';

const graduationRepository = GraduationRepository.getInstance();
const deleteGraduationUseCase = new DeleteGraduationUseCase(
  graduationRepository
);
const deleteGraduationController = new DeleteGraduationController(
  deleteGraduationUseCase
);

export { deleteGraduationController };
