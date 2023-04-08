import { dojoModel } from '../../../../database/models/dojosModel';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../IDojoRepository';

class DojoRepository implements IDojoRepository {
  private static INSTANCE: DojoRepository;

  public static getInstance() {
    if (!DojoRepository.INSTANCE) {
      DojoRepository.INSTANCE = new DojoRepository();
    }

    return DojoRepository.INSTANCE;
  }

  async create({
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
  }: ICreateDojoDTO): Promise<Dojo> {
    const obj: any = await dojoModel.create({
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
    });

    return obj;
  }

  async update({
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
  }: ICreateDojoDTO): Promise<Dojo> {
    const obj: any = await dojoModel.update(
      {
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
      },
      { where: { id_dojo: id_dojo } }
    );

    return obj;
  }

  async findById(id_dojo: string): Promise<Dojo> {
    const obj: any = await dojoModel.findOne({ where: { id_dojo: id_dojo } });

    return obj;
  }

  async findByEmail(email: string): Promise<Number> {
    const obj: any = await dojoModel.findOne({ where: { email: email } });

    return obj;
  }

  async list(): Promise<Dojo[]> {
    const obj: any = await dojoModel.findAll();

    return obj;
  }

  async delete(id_dojo: string): Promise<Dojo> {
    const obj: any = await dojoModel.destroy({ where: { id_dojo: id_dojo } });

    return obj;
  }
}

export { DojoRepository };
