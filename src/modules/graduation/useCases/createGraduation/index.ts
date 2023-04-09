import { GraduationRepository } from '../../repositories/implementations/GraduationRepository';
import { CreateGraduationController } from './CreateGraduationController';
import { CreateGraduationUseCase } from './CreateGraduationUseCase';

const graduationRepository = GraduationRepository.getInstance();
const createGraduationUseCase = new CreateGraduationUseCase(
  graduationRepository
);
const createGraduationController = new CreateGraduationController(
  createGraduationUseCase
);

export { createGraduationController };
