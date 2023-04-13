import { AppError } from '../../../erros/Error';
import { Graduation_instructor } from '../../models/Graduation_instructor';
import { IGraduation_instructorRepository } from '../../repositories/IGraduation_instructorRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_graduation_instructor: string;
  id_instructor: string;
  id_graduation: string;
  id_dojo: string;
}

class UpdateGraduation_instructorUseCase {
  constructor(private dojoRepository: IGraduation_instructorRepository) {}

  async execute({
    id_graduation_instructor,
    id_instructor,
    id_graduation,
    id_dojo,
  }: IRequest): Promise<Graduation_instructor> {
    try {
      return this.dojoRepository.update({
        id_graduation_instructor,
        id_instructor,
        id_graduation,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot update Graduation: ${error}`);
    }
  }
}

export { UpdateGraduation_instructorUseCase };
