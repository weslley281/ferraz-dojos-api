import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { GetInstructorByIdController } from './GetInstructorByIdController';
import { GetInstructorByIdUseCase } from './GetInstructorByIdUseCase';

const instructorRepository = InstructorRepository.getInstance();
const getInstructorByIdUseCase = new GetInstructorByIdUseCase(
  instructorRepository
);
const getInstructorByIdController = new GetInstructorByIdController(
  getInstructorByIdUseCase
);

export { getInstructorByIdController };
