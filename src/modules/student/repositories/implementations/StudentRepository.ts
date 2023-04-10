import { studentModel } from '../../../../database/models/studentsModel';
import { AppError } from '../../../erros/Error';
import { ICreateStudentDTO } from '../../DTO/ICreateStudentDTO';
import { Student } from '../../models/Student';
import { IStudentRepository } from '../IStudentRepository';
import { Op } from 'sequelize';

class StudentRepository implements IStudentRepository {
  private static instance: StudentRepository;

  public static getInstance(): StudentRepository {
    if (!StudentRepository.instance) {
      StudentRepository.instance = new StudentRepository();
    }

    return StudentRepository.instance;
  }

  async create({
    id_student,
    student,
    phone,
    email,
    birthday,
    responsible,
    responsible_phone,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_graduation,
    id_dojo,
  }: ICreateStudentDTO): Promise<Student> {
    const obj: any = await studentModel.create({
      id_student,
      student,
      phone,
      email,
      birthday,
      responsible,
      responsible_phone,
      address_line1,
      address_line2,
      city,
      country,
      state,
      id_graduation,
      id_dojo,
    });

    return obj.toJSON() as Student;
  }

  async update({
    id_student,
    student,
    phone,
    email,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_graduation,
    id_dojo,
  }: ICreateStudentDTO): Promise<Student> {
    const [rowsAffected] = await studentModel.update(
      {
        id_student,
        student,
        phone,
        email,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_graduation,
        id_dojo,
      },
      {
        where: { id_student },
      }
    );

    if (rowsAffected === 0) {
      throw new AppError('Dojo not found.', 404);
    }

    const updatedStudent = await studentModel.findOne({
      where: { id_student },
    });

    return updatedStudent?.toJSON() as Student;
  }

  async findById(id_student: string): Promise<Student> {
    const obj: any = await studentModel.findOne({
      where: { id_student },
    });

    return obj;
  }

  async findByEmail(email: string): Promise<Student> {
    const obj: any = await studentModel.findOne({
      where: { email },
    });

    return obj;
  }

  async list(id_dojo: string): Promise<Student[]> {
    const students: any = await studentModel.findAll({
      where: { id_dojo },
    });
    return students;
  }

  async delete(id_student: string): Promise<void> {
    const rowsAffected = await studentModel.destroy({
      where: { id_student },
    });

    if (rowsAffected === 0) {
      throw new AppError('Student not found.', 404);
    }
  }

  async search(searchTerm: string): Promise<Student[]> {
    const dojos = await studentModel.findAll({
      where: {
        [Op.or]: [
          { dojo: { [Op.iLike]: `%${searchTerm}%` } },
          { city: { [Op.iLike]: `%${searchTerm}%` } },
          { state: { [Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    return dojos.map((dojo) => dojo.toJSON() as Student);
  }
}

export { StudentRepository };
