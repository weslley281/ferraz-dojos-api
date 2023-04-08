import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';

interface IRequest {
  id_dojo: string;
}

class DeleteDojoUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({ id_dojo }: IRequest): Promise<void> {
    try {
      const dojo = await this.dojoRepository.delete(id_dojo);

      return dojo;
    } catch (error) {
      throw new AppError(`Cannot delete Dojo: ${error}`);
    }
  }
}

export { DeleteDojoUseCase };
