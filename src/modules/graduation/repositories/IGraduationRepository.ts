import { ICreateGraduationDTO } from '../DTO/ICreateGraduationDTO';
import { Graduation } from '../models/Graduation';

interface IGraduationRepository {
  create({
    id_graduation,
    graduation,
    description,
    id_dojo,
  }: ICreateGraduationDTO): Promise<Graduation>;
  update({
    id_graduation,
    graduation,
    description,
    id_dojo,
  }: ICreateGraduationDTO): Promise<Graduation>;
  findById(id_graduation: string): Promise<Graduation>;
  findByName(graduation: string): Promise<Graduation>;
  delete(id_graduation: string): Promise<void>;
  list(id_dojo: string): Promise<Graduation[]>;
}

export { IGraduationRepository };
