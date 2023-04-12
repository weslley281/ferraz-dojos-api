import { Graduation_instructorRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { CreateGraduation_instructorController } from './CreateGraduation_instructorController';
import { CreateGraduation_instructorUseCase } from './CreateGraduation_instructorUseCase';

const graduationRepository = Graduation_instructorRepository.getInstance();
const createGraduation_instructorUseCase =
  new CreateGraduation_instructorUseCase(graduationRepository);
const createGraduation_instructorController =
  new CreateGraduation_instructorController(createGraduation_instructorUseCase);

export { createGraduation_instructorController };
