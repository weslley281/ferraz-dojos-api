import { ICreateGraduation_instructorDTO } from '../DTO/ICreateGraduation_instructorDTO';
import { Graduation_instructor } from '../models/Graduation_instructor';

interface IGraduation_instructorRepository {
  create({
    id_graduation_instructor,
    id_instructor,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_instructorDTO): Promise<Graduation_instructor>;
  update({
    id_graduation_instructor,
    id_instructor,
    id_graduation,
    id_dojo,
  }: ICreateGraduation_instructorDTO): Promise<Graduation_instructor>;
  findById(id_graduation_instructor: string): Promise<Graduation_instructor>;
  delete(id_graduation_instructor: string): Promise<void>;
  list(id_instructor: string): Promise<Graduation_instructor[]>;
}

export { IGraduation_instructorRepository };
