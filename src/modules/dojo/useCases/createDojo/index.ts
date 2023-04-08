import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { CreateDojoController } from './CreateDojoController';
import { CreateDojoUseCase } from './CreateDojoUseCase';

const dojoRepository = DojoRepository.getInstance();
const createDojoUseCase = new CreateDojoUseCase(dojoRepository);
const createDojoController = new CreateDojoController(createDojoUseCase);

export { createDojoController };
