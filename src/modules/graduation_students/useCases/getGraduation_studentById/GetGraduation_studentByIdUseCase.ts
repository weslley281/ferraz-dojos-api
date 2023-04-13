import { AppError } from '../../../erros/Error';
import { Graduation_student } from '../../models/Graduation_student';
import { IGraduation_studentRepository } from '../../repositories/IGraduation_studentRepository';

interface IRequest {
  id_graduation_student: string;
}

class GetGraduation_studentByIdUseCase {
  constructor(private graduationRepository: IGraduation_studentRepository) {}

  async execute({
    id_graduation_student,
  }: IRequest): Promise<Graduation_student> {
    try {
      const graduation = await this.graduationRepository.findById(
        id_graduation_student
      );

      if (!graduation) throw new Error('Graduation not exists');

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot get graduation: ${error}`);
    }
  }
}

export { GetGraduation_studentByIdUseCase };
