import { Graduation_studentRepository } from '../../repositories/implementations/Graduation_studentRepository';
import { DeleteGraduation_studentController } from './DeleteGraduation_studentController';
import { DeleteGraduation_studentUseCase } from './DeleteGraduation_studentUseCase';

const graduationRepository = Graduation_studentRepository.getInstance();
const deleteGraduation_studentUseCase = new DeleteGraduation_studentUseCase(
  graduationRepository
);
const deleteGraduation_studentController =
  new DeleteGraduation_studentController(deleteGraduation_studentUseCase);

export { deleteGraduation_studentController };
