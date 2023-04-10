import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { DeleteInstructorController } from './DeleteInstructorController';
import { DeleteInstructorUseCase } from './DeleteInstructorUseCase';

const instructorRepository = InstructorRepository.getInstance();
const deleteInstructorUseCase = new DeleteInstructorUseCase(
  instructorRepository
);
const deleteInstructorController = new DeleteInstructorController(
  deleteInstructorUseCase
);

export { deleteInstructorController };
