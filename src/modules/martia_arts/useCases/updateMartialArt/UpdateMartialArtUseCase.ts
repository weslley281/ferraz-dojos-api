import { AppError } from '../../../erros/Error';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_martial_art: string;
  martial_art: string;
  description: string;
  id_dojo: string;
}

class UpdateMartialArtUseCase {
  constructor(private dojoRepository: IMartialArtRepository) {}

  async execute({
    id_martial_art,
    martial_art,
    description,
    id_dojo,
  }: IRequest): Promise<MartialArt> {
    try {
      return this.dojoRepository.update({
        id_martial_art,
        martial_art,
        description,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot update MartialArt: ${error}`);
    }
  }
}

export { UpdateMartialArtUseCase };
