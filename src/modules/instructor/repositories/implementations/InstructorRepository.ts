import { instructorModel } from '../../../../database/models/instructorsModel';
import { AppError } from '../../../erros/Error';
import { ICreateInstructorDTO } from '../../DTO/ICreateInstructorDTO';
import { Instructor } from '../../models/Instructor';
import { IInstructorRepository } from '../IInstructorRepository';
import { Op } from 'sequelize';

class InstructorRepository implements IInstructorRepository {
  private static instance: InstructorRepository;

  public static getInstance(): InstructorRepository {
    if (!InstructorRepository.instance) {
      InstructorRepository.instance = new InstructorRepository();
    }

    return InstructorRepository.instance;
  }

  async create({
    id_instructor,
    instructor,
    phone,
    email,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_dojo,
  }: ICreateInstructorDTO): Promise<Instructor> {
    const obj: any = await instructorModel.create({
      id_instructor,
      instructor,
      phone,
      email,
      address_line1,
      address_line2,
      city,
      country,
      state,
      id_dojo,
    });

    return obj.toJSON() as Instructor;
  }

  async update({
    id_instructor,
    instructor,
    phone,
    email,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_dojo,
  }: ICreateInstructorDTO): Promise<Instructor> {
    const [rowsAffected] = await instructorModel.update(
      {
        id_instructor,
        instructor,
        phone,
        email,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_dojo,
      },
      {
        where: { id_instructor },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Dojo not found.', 404);
    }

    const updatedInstructor = await instructorModel.findOne({
      where: { id_instructor },
    });

    return updatedInstructor?.toJSON() as Instructor;
  }

  async findById(id_instructor: string): Promise<Instructor> {
    const obj: any = await instructorModel.findOne({
      where: { id_instructor },
    });

    return obj;
  }

  async findByEmail(email: string): Promise<Instructor> {
    const obj: any = await instructorModel.findOne({
      where: { email },
    });

    return obj;
  }

  async list(id_dojo: string): Promise<Instructor[]> {
    const instructors: any = await instructorModel.findAll({
      where: { id_dojo },
    });
    return instructors;
  }

  async delete(id_instructor: string): Promise<void> {
    const rowsAffected = await instructorModel.destroy({
      where: { id_instructor },
    });

    if (rowsAffected === 0) {
      throw new AppError('Instructor not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Instructor[]> {
    const dojos = await instructorModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Instructor);
  }
}

export { InstructorRepository };
