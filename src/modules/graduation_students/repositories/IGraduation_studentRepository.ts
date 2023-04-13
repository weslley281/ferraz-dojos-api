import { ICreateGraduation_studentDTO } from '../DTO/ICreateGraduation_studentDTO';
import { Graduation_student } from '../models/Graduation_student';

interface IGraduation_studentRepository {
  create({
    id_graduation_student,
    id_student,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_studentDTO): Promise<Graduation_student>;
  update({
    id_graduation_student,
    id_student,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_studentDTO): Promise<Graduation_student>;
  findById(id_graduation_student: string): Promise<Graduation_student>;
  delete(id_graduation_student: string): Promise<void>;
  list(id_student: string): Promise<Graduation_student[]>;
}

export { IGraduation_studentRepository };
