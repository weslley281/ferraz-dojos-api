import { AppError } from '../../../erros/Error';
import { Graduation_student } from '../../models/Graduation_student';
import { IGraduation_studentRepository } from '../../repositories/IGraduation_studentRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_graduation_student: string;
  id_student: string;
  id_graduation: string;
  id_dojo: string;
}

class UpdateGraduation_studentUseCase {
  constructor(private dojoRepository: IGraduation_studentRepository) {}

  async execute({
    id_graduation_student,
    id_student,
    id_graduation,
    id_dojo,
  }: IRequest): Promise<Graduation_student> {
    try {
      return this.dojoRepository.update({
        id_graduation_student,
        id_student,
        id_graduation,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot update Graduation: ${error}`);
    }
  }
}

export { UpdateGraduation_studentUseCase };
