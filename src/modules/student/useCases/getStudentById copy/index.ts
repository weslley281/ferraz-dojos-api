import { InstructorRepository } from '../../repositories/implementations/StudentRepository';
import { GetInstructorByEmailController } from './GetStudentByEmailController';
import { GetInstructorByEmailUseCase } from './GetStudentByEmailUseCase';

const instructorRepository = InstructorRepository.getInstance();
const getInstructorByEmailUseCase = new GetInstructorByEmailUseCase(
  instructorRepository
);
const getInstructorByEmailController = new GetInstructorByEmailController(
  getInstructorByEmailUseCase
);

export { getInstructorByEmailController };
