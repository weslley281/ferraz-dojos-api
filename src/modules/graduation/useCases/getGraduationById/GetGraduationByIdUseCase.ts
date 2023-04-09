import { AppError } from '../../../erros/Error';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../../repositories/IGraduationRepository';

interface IRequest {
  id_graduation: string;
}

class GetGraduationByIdUseCase {
  constructor(private graduationRepository: IGraduationRepository) {}

  async execute({ id_graduation }: IRequest): Promise<Graduation> {
    try {
      const graduation = await this.graduationRepository.findById(
        id_graduation
      );

      if (!graduation) throw new Error('Graduation not exists');

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot get graduation: ${error}`);
    }
  }
}

export { GetGraduationByIdUseCase };
