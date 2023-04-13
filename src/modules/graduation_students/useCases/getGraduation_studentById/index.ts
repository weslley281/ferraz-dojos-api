import { Graduation_studentRepository } from '../../repositories/implementations/Graduation_studentRepository';
import { GetGraduation_studentByIdController } from './GetGraduation_studentByIdController';
import { GetGraduation_studentByIdUseCase } from './GetGraduation_studentByIdUseCase';

const graduation_studentRepository = Graduation_studentRepository.getInstance();
const getGraduation_studentByIdUseCase = new GetGraduation_studentByIdUseCase(
  graduation_studentRepository
);
const getGraduation_studentByIdController =
  new GetGraduation_studentByIdController(getGraduation_studentByIdUseCase);

export { getGraduation_studentByIdController };
