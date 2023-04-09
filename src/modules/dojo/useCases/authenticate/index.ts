import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { AuthenticateController } from './AuthenticateController';
import { AuthenticateUseCase } from './AuthenticateUseCase';

const dojoRepository = DojoRepository.getInstance();
const authenticateUseCase = new AuthenticateUseCase(dojoRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateController };
