import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { DeleteInstructorController } from './DeleteStudentController';
import { DeleteInstructorUseCase } from './DeleteStudentUseCase';

const instructorRepository = InstructorRepository.getInstance();
const deleteInstructorUseCase = new DeleteInstructorUseCase(
  instructorRepository
);
const deleteInstructorController = new DeleteInstructorController(
  deleteInstructorUseCase
);

export { deleteInstructorController };
