import { ICreateStudentDTO } from '../DTO/ICreateStudentDTO';
import { Student } from '../models/Student';

interface IStudentRepository {
  create({
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
  }: ICreateStudentDTO): Promise<Student>;
  update({
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
  }: ICreateStudentDTO): Promise<Student>;
  findById(id_student: string): Promise<Student>;
  findByEmail(email: string): Promise<Student>;
  delete(id_student: string): Promise<void>;
  list(id_dojo: string): Promise<Student[]>;
}

export { IStudentRepository };
