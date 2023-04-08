import { dojoModel } from '../../../../database/models/dojosModel';
import { AppError } from '../../../erros/Error';
import { Dojo } from '../../models/Dojo';
import { IDojoRepository } from '../IDojoRepository';
import { Op } from 'sequelize';

class DojoRepository implements IDojoRepository {
  private static instance: DojoRepository;

  private constructor() {}

  public static getInstance(): DojoRepository {
    if (!DojoRepository.instance) {
      DojoRepository.instance = new DojoRepository();
    }

    return DojoRepository.instance;
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

    return obj.toJSON() as Dojo;
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
    // const obj: any = await dojoModel.update(
    //   {
    //     id_dojo,
    //     dojo,
    //     address_line1,
    //     address_line2,
    //     city,
    //     state,
    //     country,
    //     phone,
    //     email,
    //     paid_out,
    //   },
    //   { where: { id_dojo: id_dojo } }
    // );

    const [rowsAffected] = await dojoModel.update(
      {
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
      {
        where: { id_dojo: id_dojo },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Dojo not found.', 404);
    }

    const updatedDojo = await dojoModel.findOne({
      where: { id_dojo: id_dojo },
    });

    return updatedDojo?.toJSON() as Dojo;
  }

  async findById(id_dojo: string): Promise<Dojo> {
    const obj: any = await dojoModel.findOne({ where: { id_dojo: id_dojo } });

    return obj;
  }

  async findByEmail(email: string): Promise<Dojo | null> {
    const dojo = await dojoModel.findOne({ where: { email } });
    console.log(`O resultado de busca do email é ${dojo}`);

    return dojo ? (dojo.toJSON() as Dojo) : null;
  }

  async list(): Promise<Dojo[]> {
    const dojos: any = await dojoModel.findAll({});
    return dojos;
  }

  async delete(id_dojo: string): Promise<void> {
    const rowsAffected = await dojoModel.destroy({
      where: { id_dojo },
    });

    if (rowsAffected === 0) {
      throw new AppError('Dojo not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Dojo[]> {
    const dojos = await dojoModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Dojo);
  }
}

export { DojoRepository };
