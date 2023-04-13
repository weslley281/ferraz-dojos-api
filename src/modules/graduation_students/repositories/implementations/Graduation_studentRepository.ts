import { graduation_studentModel } from '../../../../database/models/graduations_studentsModel';
import { AppError } from '../../../erros/Error';
import { ICreateGraduation_studentDTO } from '../../DTO/ICreateGraduation_studentDTO';
import { Graduation_student } from '../../models/Graduation_student';
import { IGraduation_studentRepository } from '../IGraduation_studentRepository';
import { Op } from 'sequelize';

class Graduation_studentRepository implements IGraduation_studentRepository {
  private static instance: Graduation_studentRepository;

  public static getInstance(): Graduation_studentRepository {
    if (!Graduation_studentRepository.instance) {
      Graduation_studentRepository.instance =
        new Graduation_studentRepository();
    }

    return Graduation_studentRepository.instance;
  }

  async create({
    id_graduation_student,
    id_student,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_studentDTO): Promise<Graduation_student> {
    const obj: any = await graduation_studentModel.create({
      id_graduation_student,
      id_student,
      id_graduation,
      id_dojo,
    });

    return obj.toJSON() as Graduation_student;
  }

  async update({
    id_graduation_student,
    id_student,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_studentDTO): Promise<Graduation_student> {
    const [rowsAffected] = await graduation_studentModel.update(
      {
        id_graduation_student,
        id_student,
        id_graduation,
        id_dojo,
      },
      {
        where: { id_graduation_student },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }

    const updatedGraduation = await graduation_studentModel.findOne({
      where: { id_graduation_student },
    });

    return updatedGraduation?.toJSON() as Graduation_student;
  }

  async findById(id_graduation_student: string): Promise<Graduation_student> {
    const obj: any = await graduation_studentModel.findOne({
      where: { id_graduation_student },
    });

    return obj;
  }

  async list(id_student: string): Promise<Graduation_student[]> {
    const graduations: any = await graduation_studentModel.findAll({
      where: { id_student },
    });
    return graduations;
  }

  async delete(id_graduation_student: string): Promise<void> {
    const rowsAffected = await graduation_studentModel.destroy({
      where: { id_graduation_student },
    });

    if (rowsAffected === 0) {
      throw new AppError('Graduation not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Graduation_student[]> {
    const dojos = await graduation_studentModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Graduation_student);
  }
}

export { Graduation_studentRepository };
