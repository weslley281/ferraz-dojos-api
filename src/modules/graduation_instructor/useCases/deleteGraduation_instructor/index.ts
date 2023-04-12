import { Graduation_instructorRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { DeleteGraduation_instructorController } from './DeleteGraduation_instructorController';
import { DeleteGraduation_instructorUseCase } from './DeleteGraduation_instructorUseCase';

const graduationRepository = Graduation_instructorRepository.getInstance();
const deleteGraduation_instructorUseCase =
  new DeleteGraduation_instructorUseCase(graduationRepository);
const deleteGraduation_instructorController =
  new DeleteGraduation_instructorController(deleteGraduation_instructorUseCase);

export { deleteGraduation_instructorController };
