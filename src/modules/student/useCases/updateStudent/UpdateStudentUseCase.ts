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
}

class UpdateStudentUseCase {
  constructor(private dojoRepository: IStudentRepository) {}

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
    id_dojo,
    responsible,
    responsible_phone,
  }: IRequest): Promise<Student> {
    try {
      return this.dojoRepository.update({
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
        id_dojo,
        responsible,
        responsible_phone,
      });
    } catch (error) {
      throw new AppError(`Cannot update Instructor: ${error}`);
    }
  }
}

export { UpdateStudentUseCase };
