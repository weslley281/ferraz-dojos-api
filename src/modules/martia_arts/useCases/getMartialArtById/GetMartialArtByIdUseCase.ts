import { AppError } from '../../../erros/Error';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';

interface IRequest {
  id_martial_art: string;
}

class GetMartialArtByIdUseCase {
  constructor(private martialArtRepository: IMartialArtRepository) {}

  async execute({ id_martial_art }: IRequest): Promise<MartialArt> {
    try {
      const martialArt = await this.martialArtRepository.findById(
        id_martial_art
      );

      if (!martialArt) throw new Error('Graduation not exists');

      return martialArt;
    } catch (error) {
      throw new AppError(`Cannot get graduation: ${error}`);
    }
  }
}

export { GetMartialArtByIdUseCase };
