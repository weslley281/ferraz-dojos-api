import { AppError } from '../../../erros/Error';
import { IStudentRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  id_student: string;
}

class DeleteStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({ id_student }: IRequest): Promise<void> {
    try {
      const student = await this.studentRepository.delete(id_student);

      return student;
    } catch (error) {
      throw new AppError(`Cannot delete Student: ${error}`);
    }
  }
}

export { DeleteStudentUseCase };
