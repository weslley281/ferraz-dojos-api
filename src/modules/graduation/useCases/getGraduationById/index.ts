import { DojoRepository } from '../../repositories/implementations/GraduationRepository';
import { GetDojoByIdController } from './GetGraduationByIdController';
import { GetDojoByIdUseCase } from './GetGraduationByIdUseCase';

const dojoRepository = DojoRepository.getInstance();
const getDojoByIdUseCase = new GetDojoByIdUseCase(dojoRepository);
const getDojoByIdController = new GetDojoByIdController(getDojoByIdUseCase);

export { getDojoByIdController };
