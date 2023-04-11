import { AppError } from '../../../erros/Error';
import { Student } from '../../models/Student';
import { IStudentRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  id_student: string;
  student: string;
  birthday: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  responsible: string;
  responsible_phone: string;
  id_dojo: string;
  id_graduation: string;
  paid_out: boolean;
}

class CreateStudentUseCase {
  constructor(private studentRepository: IStudentRepository) {}

  async execute({
    id_student,
    student,
    phone,
    email,
    birthday,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_graduation,
    id_dojo,
    responsible,
    responsible_phone,
    paid_out,
  }: IRequest): Promise<Student> {
    const dojoAlreadyExists = await this.studentRepository.findByEmail(
      email ? email : ''
    );

    if (dojoAlreadyExists) throw new Error('Instructor already exists');

    try {
      return this.studentRepository.create({
        id_student,
        student,
        phone,
        email,
        birthday,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_graduation,
        id_dojo,
        responsible,
        responsible_phone,
        paid_out,
      });
    } catch (error) {
      throw new AppError(`Cannot create Sutudent: ${error}`);
    }
  }
}

export { CreateStudentUseCase };
