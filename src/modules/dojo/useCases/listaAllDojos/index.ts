import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { ListDojoController } from './ListDojoController';
import { ListDojoUseCase } from './ListDojoUseCase';

const dojoRepository = DojoRepository.getInstance();
const listDojoUseCase = new ListDojoUseCase(dojoRepository);
const listDojoController = new ListDojoController(listDojoUseCase);

export { listDojoController };
