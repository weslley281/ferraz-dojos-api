import { AppError } from '../../../erros/Error';
import { Graduation_student } from '../../models/Graduation_student';
import { IGraduation_studentRepository } from '../../repositories/IGraduation_studentRepository';

interface IRequest {
  id_student: string;
}

class ListGraduation_studentUseCase {
  constructor(
    private graduation_studentRepository: IGraduation_studentRepository
  ) {}

  async execute({ id_student }: IRequest): Promise<Graduation_student[]> {
    try {
      const graduations = await this.graduation_studentRepository.list(
        id_student
      );

      if (!graduations) throw new Error('Cannot get Graduation');

      return graduations;
    } catch (error) {
      throw new AppError(`Cannot get Graduation: ${error}`);
    }
  }
}

export { ListGraduation_studentUseCase };
