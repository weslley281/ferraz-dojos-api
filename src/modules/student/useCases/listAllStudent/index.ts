import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { ListInstructorController } from './ListStudentController';
import { ListInstructorUseCase } from './ListStudentUseCase';

const instructorRepository = InstructorRepository.getInstance();
const listInstructorUseCase = new ListInstructorUseCase(instructorRepository);
const listInstructorController = new ListInstructorController(
  listInstructorUseCase
);

export { listInstructorController };
