import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { UpdateStudentController } from './UpdateStudentController';
import { UpdateStudentUseCase } from './UpdateStudentUseCase';

const studentRepository = StudentRepository.getInstance();
const updateStudentUseCase = new UpdateStudentUseCase(studentRepository);
const updateStudentController = new UpdateStudentController(
  updateStudentUseCase
);

export { updateStudentController };
