import { graduationModel } from '../../../../database/models/graduationsModel';
import { AppError } from '../../../erros/Error';
import { ICreateGraduationDTO } from '../../DTO/ICreateGraduationDTO';
import { Graduation } from '../../models/Graduation';
import { IGraduationRepository } from '../IGraduationRepository';
import { Op } from 'sequelize';

class GraduationRepository implements IGraduationRepository {
  private static instance: GraduationRepository;

  public static getInstance(): GraduationRepository {
    if (!GraduationRepository.instance) {
      GraduationRepository.instance = new GraduationRepository();
    }

    return GraduationRepository.instance;
  }

  async create({
    id_graduation,
    graduation,
    description,
    id_martial_art,
    id_dojo,
  }: ICreateGraduationDTO): Promise<Graduation> {
    const obj: any = await graduationModel.create({
      id_graduation,
      graduation,
      description,
      id_martial_art,
      id_dojo,
    });

    return obj.toJSON() as Graduation;
  }

  async update({
    id_graduation,
    graduation,
    description,
    id_martial_art,
    id_dojo,
  }: ICreateGraduationDTO): Promise<Graduation> {
    const [rowsAffected] = await graduationModel.update(
      {
        id_graduation,
        graduation,
        description,
        id_martial_art,
        id_dojo,
      },
      {
        where: { id_graduation },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }

    const updatedGraduation = await graduationModel.findOne({
      where: { id_graduation },
    });

    return updatedGraduation?.toJSON() as Graduation;
  }

  async findById(id_graduation: string): Promise<Graduation> {
    const obj: any = await graduationModel.findOne({
      where: { id_graduation },
    });

    return obj;
  }

  async findByName(graduation: string): Promise<Graduation> {
    const obj: any = await graduationModel.findOne({
      where: { graduation },
    });

    return obj;
  }

  async list(id_dojo: string): Promise<Graduation[]> {
    const graduations: any = await graduationModel.findAll({
      where: { id_dojo },
    });
    return graduations;
  }

  async delete(id_graduation: string): Promise<void> {
    const rowsAffected = await graduationModel.destroy({
      where: { id_graduation },
    });

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Graduation[]> {
    const dojos = await graduationModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Graduation);
  }
}

export { GraduationRepository };
