import { AppError } from '../../../erros/Error';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../../repositories/IGraduationRepository';

interface IRequest {
  id_graduation: string;
}

class DeleteGraduationUseCase {
  constructor(private graduationRepository: IGraduationRepository) {}

  async execute({ id_graduation }: IRequest): Promise<void> {
    try {
      const graduation = await this.graduationRepository.delete(id_graduation);

      return graduation;
    } catch (error) {
      throw new AppError(`Cannot delete Graduation: ${error}`);
    }
  }
}

export { DeleteGraduationUseCase };
