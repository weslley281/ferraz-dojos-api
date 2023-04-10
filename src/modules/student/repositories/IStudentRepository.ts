import { ICreateInstructorDTO } from '../DTO/ICreateStudentDTO';
import { Instructor } from '../models/Student';

interface IInstructorRepository {
  create({
    id_instructor,
    instructor,
    phone,
    email,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_graduation,
    id_dojo,
  }: ICreateInstructorDTO): Promise<Instructor>;
  update({
    id_instructor,
    instructor,
    phone,
    email,
    address_line1,
    address_line2,
    city,
    country,
    state,
    id_graduation,
    id_dojo,
  }: ICreateInstructorDTO): Promise<Instructor>;
  findById(id_graduation: string): Promise<Instructor>;
  findByEmail(email: string): Promise<Instructor>;
  delete(id_graduation: string): Promise<void>;
  list(id_dojo: string): Promise<Instructor[]>;
}

export { IInstructorRepository };
