import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_dojo: string;
  dojo: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  paid_out?: boolean;
}

class UpdateDojoUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({
    id_dojo,
    dojo,
    address_line1,
    address_line2,
    city,
    state,
    country,
    phone,
    email,
    paid_out,
  }: IRequest): Promise<Dojo> {
    const dojoAlreadyExists = await this.dojoRepository.findByEmail(email);

    if (dojoAlreadyExists) {
      try {
        return this.dojoRepository.update({
          id_dojo,
          dojo,
          address_line1,
          address_line2,
          city,
          state,
          country,
          phone,
          email,
          paid_out,
        });
      } catch (error) {
        throw new AppError(`Cannot update Dojo: ${error}`);
      }
    }
    throw new Error(`Dojo doesn't exists`);
  }
}

export { UpdateDojoUseCase };
