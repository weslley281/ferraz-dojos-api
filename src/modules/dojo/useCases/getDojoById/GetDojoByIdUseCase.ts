import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';

interface IRequest {
  id_dojo: string;
}

class GetDojoByIdUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({ id_dojo }: IRequest): Promise<Dojo> {
    try {
      const dojo = await this.dojoRepository.findById(id_dojo);

      if (!dojo) throw new Error('Dojo not exists');

      return dojo;
    } catch (error) {
      throw new AppError(`Cannot update Dojo: ${error}`);
    }
  }
}

export { GetDojoByIdUseCase };
