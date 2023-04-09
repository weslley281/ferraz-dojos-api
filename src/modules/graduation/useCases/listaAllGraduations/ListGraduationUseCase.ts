import { AppError } from '../../../erros/Error';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../../repositories/IGraduationRepository';

interface IRequest {
  id_dojo: string;
}

class ListGraduationUseCase {
  constructor(private graduationRepository: IGraduationRepository) {}

  async execute({ id_dojo }: IRequest): Promise<Graduation[]> {
    try {
      const graduations = await this.graduationRepository.list(id_dojo);

      if (!graduations) throw new Error('Cannot get Graduation');

      return graduations;
    } catch (error) {
      throw new AppError(`Cannot get Graduation: ${error}`);
    }
  }
}

export { ListGraduationUseCase };
