import { ICreateInstructorDTO } from '../DTO/ICreateInstructorDTO';
import { Instructor } from '../models/Instructor';

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
    id_dojo,
  }: ICreateInstructorDTO): Promise<Instructor>;
  findById(id_instructor: string): Promise<Instructor>;
  findByEmail(email: string): Promise<Instructor>;
  delete(id_instructor: string): Promise<void>;
  list(id_dojo: string): Promise<Instructor[]>;
}

export { IInstructorRepository };
