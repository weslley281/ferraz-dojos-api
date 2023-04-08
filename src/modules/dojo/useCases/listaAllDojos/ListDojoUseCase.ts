import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';

class ListDojoUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute(): Promise<Dojo[]> {
    try {
      const dojos = await this.dojoRepository.list();

      if (!dojos) throw new Error('Dojo not exists');

      return dojos;
    } catch (error) {
      throw new AppError(`Cannot update Dojo: ${error}`);
    }
  }
}

export { ListDojoUseCase };
