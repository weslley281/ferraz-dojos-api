import { AppError } from '../../../erros/Error';
import { Graduation_instructor } from '../../models/Graduation_instructor';
import { IGraduation_instructorRepository } from '../../repositories/IGraduation_instructorRepository';

interface IRequest {
  id_graduation_instructor: string;
}

class DeleteGraduation_instructorUseCase {
  constructor(private graduationRepository: IGraduation_instructorRepository) {}

  async execute({ id_graduation_instructor }: IRequest): Promise<void> {
    try {
      const graduation = await this.graduationRepository.delete(
        id_graduation_instructor
      );

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot delete Graduation: ${error}`);
    }
  }
}

export { DeleteGraduation_instructorUseCase };
