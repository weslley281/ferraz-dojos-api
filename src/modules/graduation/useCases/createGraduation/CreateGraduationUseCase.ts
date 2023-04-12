import { AppError } from '../../../erros/Error';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../../repositories/IGraduationRepository';

interface IRequest {
  id_graduation?: string;
  graduation?: string;
  description: string;
  id_dojo: string;
  id_martial_art: string;
}

class CreateGraduationUseCase {
  constructor(private graduationRepository: IGraduationRepository) {}

  async execute({
    id_graduation,
    graduation,
    description,
    id_martial_art,
    id_dojo,
  }: IRequest): Promise<Graduation> {
    const dojoAlreadyExists = await this.graduationRepository.findByName(
      graduation ? graduation : ''
    );

    if (dojoAlreadyExists) throw new Error('Graduation already exists');

    try {
      return this.graduationRepository.create({
        id_graduation,
        graduation,
        description,
        id_martial_art,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot create Graduation: ${error}`);
    }
  }
}

export { CreateGraduationUseCase };
