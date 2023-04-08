import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { DeleteDojoController } from './DeleteDojoController';
import { DeleteDojoUseCase } from './DeleteDojoUseCase';

const dojoRepository = DojoRepository.getInstance();
const deleteDojoUseCase = new DeleteDojoUseCase(dojoRepository);
const deleteDojoController = new DeleteDojoController(deleteDojoUseCase);

export { deleteDojoController };
