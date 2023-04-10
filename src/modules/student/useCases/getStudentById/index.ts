import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { GetStudentByIdController } from './GetStudentByIdController';
import { GetStudentByIdUseCase } from './GetStudentByIdUseCase';

const studentRepository = StudentRepository.getInstance();
const getStudentByIdUseCase = new GetStudentByIdUseCase(studentRepository);
const getStudentByIdController = new GetStudentByIdController(
  getStudentByIdUseCase
);

export { getStudentByIdController };
