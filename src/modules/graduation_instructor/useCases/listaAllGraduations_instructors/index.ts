import { Graduation_instructorRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { ListGraduation_instructorController } from './ListGraduation_instructorController';
import { ListGraduation_instructorUseCase } from './ListGraduation_instructorUseCase';

const graduation_instructorRepository =
  Graduation_instructorRepository.getInstance();
const listGraduation_instructorUseCase = new ListGraduation_instructorUseCase(
  graduation_instructorRepository
);
const listGraduation_instructorController =
  new ListGraduation_instructorController(listGraduation_instructorUseCase);

export { listGraduation_instructorController };
