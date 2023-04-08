import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { UpdateDojoController } from './UpdateDojoController';
import { UpdateDojoUseCase } from './UpdateDojoUseCase';

const dojoRepository = DojoRepository.getInstance();
const updateDojoUseCase = new UpdateDojoUseCase(dojoRepository);
const updateDojoController = new UpdateDojoController(updateDojoUseCase);

export { updateDojoController };
