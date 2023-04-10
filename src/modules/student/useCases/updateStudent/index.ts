import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { UpdateInstructorController } from './UpdateStudentController';
import { UpdateInstructorUseCase } from './UpdateStudentUseCase';

const instructorRepository = InstructorRepository.getInstance();
const updateInstructorUseCase = new UpdateInstructorUseCase(
  instructorRepository
);
const updateInstructorController = new UpdateInstructorController(
  updateInstructorUseCase
);

export { updateInstructorController };
