import { Graduation_studentRepository } from '../../repositories/implementations/Graduation_studentRepository';
import { UpdateGraduation_studentController } from './UpdateGraduation_studentController';
import { UpdateGraduation_studentUseCase } from './UpdateGraduation_studentUseCase';

const graduationRepository = Graduation_studentRepository.getInstance();
const updateGraduation_studentUseCase = new UpdateGraduation_studentUseCase(
  graduationRepository
);
const updateGraduation_studentController =
  new UpdateGraduation_studentController(updateGraduation_studentUseCase);

export { updateGraduation_studentController };
