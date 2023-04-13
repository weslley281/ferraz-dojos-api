import { AppError } from '../../../erros/Error';
import { Graduation_student } from '../../models/Graduation_student';
import { IGraduation_studentRepository } from '../../repositories/IGraduation_studentRepository';

interface IRequest {
  id_graduation_student: string;
}

class DeleteGraduation_studentUseCase {
  constructor(private graduationRepository: IGraduation_studentRepository) {}

  async execute({ id_graduation_student }: IRequest): Promise<void> {
    try {
      const graduation = await this.graduationRepository.delete(
        id_graduation_student
      );

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot delete Graduation: ${error}`);
    }
  }
}

export { DeleteGraduation_studentUseCase };
