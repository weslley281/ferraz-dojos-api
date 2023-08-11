import { AppError } from '@shared/erros/AppError';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../../repositories/IDojoRepository';
import { hash } from 'bcrypt';

interface IRequest {
  id_dojo: string;
  dojo: string;
  password: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  paid_out?: boolean;
}

class CreateDojoUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({
    id_dojo,
    dojo,
    password,
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

    if (dojoAlreadyExists) throw new Error('Dojo already exists');

    const passwordHash = await hash(password, 8);

    try {
      return this.dojoRepository.create({
        id_dojo,
        dojo,
        password: passwordHash,
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
      throw new AppError(`Cannot create Dojo: ${error}`);
    }
  }
}

export { CreateDojoUseCase };
