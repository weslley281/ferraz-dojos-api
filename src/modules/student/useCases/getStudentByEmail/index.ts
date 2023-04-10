import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { GetStudentByEmailController } from './GetStudentByEmailController';
import { GetStudentByEmailUseCase } from './GetStudentByEmailUseCase';

const studentRepository = StudentRepository.getInstance();
const getStudentByEmailUseCase = new GetStudentByEmailUseCase(
  studentRepository
);
const getStudentByEmailController = new GetStudentByEmailController(
  getStudentByEmailUseCase
);

export { getStudentByEmailController };
