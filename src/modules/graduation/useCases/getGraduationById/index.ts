import { GraduationRepository } from '../../repositories/implementations/GraduationRepository';
import { GetGraduationByIdController } from './GetGraduationByIdController';
import { GetGraduationByIdUseCase } from './GetGraduationByIdUseCase';

const graduationRepository = GraduationRepository.getInstance();
const getGraduationByIdUseCase = new GetGraduationByIdUseCase(
  graduationRepository
);
const getGraduationByIdController = new GetGraduationByIdController(
  getGraduationByIdUseCase
);

export { getGraduationByIdController };
