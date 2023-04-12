import { AppError } from '../../../erros/Error';
import { Graduation_instructor } from '../../models/Graduation_instructor';
import { IGraduation_instructorRepository } from '../../repositories/IGraduation_instructorRepository';

interface IRequest {
  id_graduation_instructor: string;
}

class GetGraduation_instructorByIdUseCase {
  constructor(private graduationRepository: IGraduation_instructorRepository) {}

  async execute({
    id_graduation_instructor,
  }: IRequest): Promise<Graduation_instructor> {
    try {
      const graduation = await this.graduationRepository.findById(
        id_graduation_instructor
      );

      if (!graduation) throw new Error('Graduation not exists');

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot get graduation: ${error}`);
    }
  }
}

export { GetGraduation_instructorByIdUseCase };
