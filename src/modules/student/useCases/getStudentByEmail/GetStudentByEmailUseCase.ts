import { AppError } from '../../../erros/Error';
import { Student } from '../../models/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  email: string;
}

class GetStudentByEmailUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ email }: IRequest): Promise<Student> {
    try {
      const student = await this.studentRepository.findByEmail(email);

      if (!student) throw new Error('Student not exists');

      return student;
    } catch (error) {
      throw new AppError(`Cannot get Student: ${error}`);
    }
  }
}

export { GetStudentByEmailUseCase };
