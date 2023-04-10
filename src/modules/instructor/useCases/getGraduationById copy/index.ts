import { InstructorRepository } from '../../repositories/implementations/InstructorRepository';
import { GetInstructorByEmailController } from './GetInstructorByEmailController';
import { GetInstructorByEmailUseCase } from './GetInstructorByEmailUseCase';

const instructorRepository = InstructorRepository.getInstance();
const getInstructorByEmailUseCase = new GetInstructorByEmailUseCase(
  instructorRepository
);
const getInstructorByEmailController = new GetInstructorByEmailController(
  getInstructorByEmailUseCase
);

export { getInstructorByEmailController };
