import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { CreateInstructorController } from './CreateStudentController';
import { CreateInstructorUseCase } from './CreateStudentUseCase';

const instructorRepository = InstructorRepository.getInstance();
const createInstructorUseCase = new CreateInstructorUseCase(
  instructorRepository
);
const createInstructorController = new CreateInstructorController(
  createInstructorUseCase
);

export { createInstructorController };
