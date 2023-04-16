import { AppError } from '../../../erros/Error';
import { MartialArt } from '../../models/MartialArt';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';

interface IRequest {
  id_dojo: string;
}

class ListMartialArtUseCase {
  constructor(private martialArtRepository: IMartialArtRepository) {}

  async execute({ id_dojo }: IRequest): Promise<MartialArt[]> {
    try {
      const martialArts = await this.martialArtRepository.list(id_dojo);

      if (!martialArts) throw new Error('Cannot get Martial Art');

      return martialArts;
    } catch (error) {
      throw new AppError(`Cannot get Martial Art: ${error}`);
    }
  }
}

export { ListMartialArtUseCase };
