import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { CreateStudentController } from './CreateStudentController';
import { CreateStudentUseCase } from './CreateStudentUseCase';

const studentRepository = StudentRepository.getInstance();
const createStudentUseCase = new CreateStudentUseCase(studentRepository);
const createStudentController = new CreateStudentController(
  createStudentUseCase
);

export { createStudentController };
