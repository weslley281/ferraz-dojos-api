import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { GetDojoByIdController } from './GetDojoByIdController';
import { GetDojoByIdUseCase } from './GetDojoByIdUseCase';

const dojoRepository = DojoRepository.getInstance();
const getDojoByIdUseCase = new GetDojoByIdUseCase(dojoRepository);
const getDojoByIdController = new GetDojoByIdController(getDojoByIdUseCase);

export { getDojoByIdController };
