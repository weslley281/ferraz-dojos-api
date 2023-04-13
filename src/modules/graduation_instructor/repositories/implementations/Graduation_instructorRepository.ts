import { graduation_instructorModel } from '../../../../database/models/graduations_instructorsModel';
import { AppError } from '../../../erros/Error';
import { ICreateGraduation_instructorDTO } from '../../DTO/ICreateGraduation_instructorDTO';
import { Graduation_instructor } from '../../models/Graduation_instructor';
import { IGraduation_instructorRepository } from '../IGraduation_instructorRepository';
import { Op } from 'sequelize';

class Graduation_instructorRepository
  implements IGraduation_instructorRepository
{
  private static instance: Graduation_instructorRepository;

  public static getInstance(): Graduation_instructorRepository {
    if (!Graduation_instructorRepository.instance) {
      Graduation_instructorRepository.instance =
        new Graduation_instructorRepository();
    }

    return Graduation_instructorRepository.instance;
  }

  async create({
    id_graduation_instructor,
    id_instructor,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_instructorDTO): Promise<Graduation_instructor> {
    const obj: any = await graduation_instructorModel.create({
      id_graduation_instructor,
      id_instructor,
      id_graduation,
      id_dojo,
    });

    return obj.toJSON() as Graduation_instructor;
  }

  async update({
    id_graduation_instructor,
    id_instructor,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_instructorDTO): Promise<Graduation_instructor> {
    const [rowsAffected] = await graduation_instructorModel.update(
      {
        id_graduation_instructor,
        id_instructor,
        id_graduation,
        id_dojo,
      },
      {
        where: { id_graduation_instructor },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }

    const updatedGraduation = await graduation_instructorModel.findOne({
      where: { id_graduation_instructor },
    });

    return updatedGraduation?.toJSON() as Graduation_instructor;
  }

  async findById(
    id_graduation_instructor: string
  ): Promise<Graduation_instructor> {
    const obj: any = await graduation_instructorModel.findOne({
      where: { id_graduation_instructor },
    });

    return obj;
  }

  async list(id_instructor: string): Promise<Graduation_instructor[]> {
    const graduations: any = await graduation_instructorModel.findAll({
      where: { id_instructor },
    });
    return graduations;
  }

  async delete(id_graduation_instructor: string): Promise<void> {
    const rowsAffected = await graduation_instructorModel.destroy({
      where: { id_graduation_instructor },
    });

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Graduation_instructor[]> {
    const dojos = await graduation_instructorModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Graduation_instructor);
  }
}

export { Graduation_instructorRepository };
