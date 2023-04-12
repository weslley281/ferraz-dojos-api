import { Graduation_instructorRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { GetGraduation_instructorByIdController } from './GetGraduation_instructorByIdController';
import { GetGraduation_instructorByIdUseCase } from './GetGraduation_instructorByIdUseCase';

const graduation_instructorRepository =
  Graduation_instructorRepository.getInstance();
const getGraduation_instructorByIdUseCase =
  new GetGraduation_instructorByIdUseCase(graduation_instructorRepository);
const getGraduation_instructorByIdController =
  new GetGraduation_instructorByIdController(
    getGraduation_instructorByIdUseCase
  );

export { getGraduation_instructorByIdController };
