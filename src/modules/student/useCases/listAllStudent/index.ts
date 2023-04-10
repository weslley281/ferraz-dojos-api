import { StudentRepository } from '../../repositories/implementations/StudentRepository';
import { ListStudentController } from './ListStudentController';
import { ListStudentUseCase } from './ListStudentUseCase';

const studentRepository = StudentRepository.getInstance();
const listStudentUseCase = new ListStudentUseCase(studentRepository);
const listStudentController = new ListStudentController(listStudentUseCase);

export { listStudentController };
