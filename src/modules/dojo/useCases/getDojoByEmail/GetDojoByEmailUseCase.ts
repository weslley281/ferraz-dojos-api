import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';

interface IRequest {
  email: string;
}

class GetDojoByEmailUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({ email }: IRequest): Promise<Dojo> {
    try {
      const dojo = await this.dojoRepository.findByEmail(email);

      if (!dojo) throw new Error('Dojo not exists');

      return dojo;
    } catch (error) {
      throw new AppError(`Cannot update Dojo: ${error}`);
    }
  }
}

export { GetDojoByEmailUseCase };
