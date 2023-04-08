import { DojoRepository } from '../../repositories/implementations/DojoRepository';
import { GetDojoByEmailController } from './GetDojoByEmailController';
import { GetDojoByEmailUseCase } from './GetDojoByEmailUseCase';

const dojoRepository = DojoRepository.getInstance();
const getDojoByEmailUseCase = new GetDojoByEmailUseCase(dojoRepository);
const getDojoByEmailController = new GetDojoByEmailController(
  getDojoByEmailUseCase
);

export { getDojoByEmailController };
