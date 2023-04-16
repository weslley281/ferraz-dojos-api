import { AppError } from '../../../erros/Error';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';

interface IRequest {
  martial_art: string;
}

class GetMartialArtByNameUseCase {
  constructor(private martialArtRepository: IMartialArtRepository) {}

  async execute({ martial_art }: IRequest): Promise<MartialArt> {
    try {
      const martialArt = await this.martialArtRepository.findByName(
        martial_art
      );

      if (!martialArt) throw new Error('Martial Art not exists');

      return martialArt;
    } catch (error) {
      throw new AppError(`Cannot get Martial Art: ${error}`);
    }
  }
}

export { GetMartialArtByNameUseCase };
