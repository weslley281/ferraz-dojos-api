import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { CreateInstructorController } from './CreateInstructorController';
import { CreateInstructorUseCase } from './CreateInstructorUseCase';

const instructorRepository = InstructorRepository.getInstance();
const createInstructorUseCase = new CreateInstructorUseCase(
  instructorRepository
);
const createInstructorController = new CreateInstructorController(
  createInstructorUseCase
);

export { createInstructorController };
