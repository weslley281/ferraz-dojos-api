import { AppError } from '../../../erros/Error';
import { Graduation_instructor } from '../../models/Graduation_instructor';
import { IGraduation_instructorRepository } from '../../repositories/IGraduation_instructorRepository';

interface IRequest {
  id_instructor: string;
}

class ListGraduation_instructorUseCase {
  constructor(
    private graduation_instructorRepository: IGraduation_instructorRepository
  ) {}

  async execute({ id_instructor }: IRequest): Promise<Graduation_instructor[]> {
    try {
      const graduations = await this.graduation_instructorRepository.list(
        id_instructor
      );

      if (!graduations) throw new Error('Cannot get Graduation');

      return graduations;
    } catch (error) {
      throw new AppError(`Cannot get Graduation: ${error}`);
    }
  }
}

export { ListGraduation_instructorUseCase };
