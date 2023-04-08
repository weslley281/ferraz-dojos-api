import { Dojo } from '../models/Dojo';

interface IDojoRepository {
  create({
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
  }: ICreateDojoDTO): Promise<Dojo>;
  update({
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
  }: ICreateDojoDTO): Promise<Dojo>;
  findById(id_dojo: string): Promise<Dojo>;
  delete(id_dojo: string): Promise<Dojo>;
  findByEmail(email: string): Promise<Number>;
  list(): Promise<Dojo[]>;
}

export { IDojoRepository };
