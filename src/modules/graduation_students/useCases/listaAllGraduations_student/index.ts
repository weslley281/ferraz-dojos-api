import { Graduation_studentRepository } from '../../repositories/implementations/Graduation_studentRepository';
import { ListGraduation_studentController } from './ListGraduation_studentController';
import { ListGraduation_studentUseCase } from './ListGraduation_studentUseCase';

const graduation_studentRepository = Graduation_studentRepository.getInstance();
const listGraduation_studentUseCase = new ListGraduation_studentUseCase(
  graduation_studentRepository
);
const listGraduation_studentController = new ListGraduation_studentController(
  listGraduation_studentUseCase
);

export { listGraduation_studentController };
