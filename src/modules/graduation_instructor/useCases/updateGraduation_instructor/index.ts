import { Graduation_instructorRepository } from '../../repositories/implementations/Graduation_instructorRepository';
import { UpdateGraduation_instructorController } from './UpdateGraduation_instructorController';
import { UpdateGraduation_instructorUseCase } from './UpdateGraduation_instructorUseCase';

const graduationRepository = Graduation_instructorRepository.getInstance();
const updateGraduation_instructorUseCase =
  new UpdateGraduation_instructorUseCase(graduationRepository);
const updateGraduation_instructorController =
  new UpdateGraduation_instructorController(updateGraduation_instructorUseCase);

export { updateGraduation_instructorController };
