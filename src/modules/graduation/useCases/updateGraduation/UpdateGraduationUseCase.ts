import { AppError } from '../../../erros/Error';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../../repositories/IGraduationRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_graduation?: string;
  graduation?: string;
  description: string;
  id_dojo: string;
}

class UpdateGraduationUseCase {
  constructor(private dojoRepository: IGraduationRepository) {}

  async execute({
    id_graduation,
    graduation,
    description,
    id_dojo,
  }: IRequest): Promise<Graduation> {
    try {
      return this.dojoRepository.update({
        id_graduation,
        graduation,
        description,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot update Graduation: ${error}`);
    }
  }
}

export { UpdateGraduationUseCase };
