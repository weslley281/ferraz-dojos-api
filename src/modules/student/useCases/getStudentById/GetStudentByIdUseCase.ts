import { AppError } from '../../../erros/Error';
import { Student } from '../../models/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  id_student: string;
}

class GetStudentByIdUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ id_student }: IRequest): Promise<Student> {
    try {
      const student = await this.studentRepository.findById(id_student);

      if (!student) throw new Error('Student not exists');

      return student;
    } catch (error) {
      throw new AppError(`Cannot get Student: ${error}`);
    }
  }
}

export { GetStudentByIdUseCase };
