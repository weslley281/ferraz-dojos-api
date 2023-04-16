import { AppError } from '../../../erros/Error';
import { IMartialArtRepository } from '../../repositories/IMartialArtRepository';

interface IRequest {
  id_martial_art: string;
}

class DeleteMartialArtUseCase {
  constructor(private martialArtRepository: IMartialArtRepository) {}

  async execute({ id_martial_art }: IRequest): Promise<void> {
    try {
      const martialArt = await this.martialArtRepository.delete(id_martial_art);

      return martialArt;
    } catch (error) {
      throw new AppError(`Cannot delete Martial Art: ${error}`);
    }
  }
}

export { DeleteMartialArtUseCase };
