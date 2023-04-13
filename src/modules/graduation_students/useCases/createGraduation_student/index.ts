import { Graduation_studentRepository } from '../../repositories/implementations/Graduation_studentRepository';
import { CreateGraduation_studentController } from './CreateGraduation_studentController';
import { CreateGraduation_studentUseCase } from './CreateGraduation_studentUseCase';

const graduationRepository = Graduation_studentRepository.getInstance();
const createGraduation_studentUseCase = new CreateGraduation_studentUseCase(
  graduationRepository
);
const createGraduation_studentController =
  new CreateGraduation_studentController(createGraduation_studentUseCase);

export { createGraduation_studentController };
