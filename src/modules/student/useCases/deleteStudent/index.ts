import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { DeleteStudentController } from './DeleteStudentController';
import { DeleteStudentUseCase } from './DeleteStudentUseCase';

const studentRepository = StudentRepository.getInstance();
const deleteStudentUseCase = new DeleteStudentUseCase(studentRepository);
const deleteStudentController = new DeleteStudentController(
  deleteStudentUseCase
);

export { deleteStudentController };
