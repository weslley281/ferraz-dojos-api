import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { UpdateInstructorController } from './UpdateInstructorController';
import { UpdateInstructorUseCase } from './UpdateInstructorUseCase';

const instructorRepository = InstructorRepository.getInstance();
const updateInstructorUseCase = new UpdateInstructorUseCase(
  instructorRepository
);
const updateInstructorController = new UpdateInstructorController(
  updateInstructorUseCase
);

export { updateInstructorController };
