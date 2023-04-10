import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { GetInstructorByIdController } from './GetStudentByIdController';
import { GetInstructorByIdUseCase } from './GetStudentByIdUseCase';

const instructorRepository = InstructorRepository.getInstance();
const getInstructorByIdUseCase = new GetInstructorByIdUseCase(
  instructorRepository
);
const getInstructorByIdController = new GetInstructorByIdController(
  getInstructorByIdUseCase
);

export { getInstructorByIdController };
