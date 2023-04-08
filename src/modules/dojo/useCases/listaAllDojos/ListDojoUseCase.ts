import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';

class ListDojoUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute(): Promise<Dojo[]> {
    try {
      const dojos = await this.dojoRepository.list();

      return dojos;
    } catch (error) {
      console.error(`Error listing dojos: ${error}`);

      if (error instanceof AppError) {
        throw error;
      } else if (error instanceof Error) {
        throw new AppError(`Error listing dojos: ${error.message}`);
      } else {
        throw new AppError(`Error listing dojos`);
      }
    }
  }
}

export { ListDojoUseCase };
