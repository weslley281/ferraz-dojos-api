import { AppError } from '../../../erros/Error';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';

interface IRequest {
  id_martial_art: string;
  martial_art: string;
  description: string;
  id_dojo: string;
}

class CreateMartialArtUseCase {
  constructor(private martial_artRepository: IMartialArtRepository) {}

  async execute({
    id_martial_art,
    martial_art,
    description,
    id_dojo,
  }: IRequest): Promise<MartialArt> {
    const dojoAlreadyExists = await this.martial_artRepository.findByName(
      martial_art ? martial_art : ''
    );

    if (dojoAlreadyExists) throw new Error('Graduation already exists');

    try {
      return this.martial_artRepository.create({
        id_martial_art,
        martial_art,
        description,
        id_dojo,
      });
    } catch (error) {
      throw new AppError(`Cannot create Martial Art: ${error}`);
    }
  }
}

export { CreateMartialArtUseCase };
