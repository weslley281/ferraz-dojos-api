import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { ListInstructorController } from './ListInstructorController';
import { ListInstructorUseCase } from './ListInstructorUseCase';

const instructorRepository = InstructorRepository.getInstance();
const listInstructorUseCase = new ListInstructorUseCase(instructorRepository);
const listInstructorController = new ListInstructorController(
  listInstructorUseCase
);

export { listInstructorController };
