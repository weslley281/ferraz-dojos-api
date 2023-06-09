import { AppError } from '../../../erros/Error';
import { Student } from '../../models/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  id_dojo: string;
}

class ListStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ id_dojo }: IRequest): Promise<Student[]> {
    try {
      const students = await this.studentRepository.list(id_dojo);

      if (!students) throw new Error('Cannot get Student');

      return students;
    } catch (error) {
      throw new AppError(`Cannot get Student: ${error}`);
    }
  }
}

export { ListStudentUseCase };
