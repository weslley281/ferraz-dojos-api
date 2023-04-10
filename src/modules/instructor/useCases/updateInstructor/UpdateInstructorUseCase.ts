import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Instructor';
import { IInstructorRepository } from '../../repositories/IInstructorRepository';

interface IRequest {
  id_instructor: string;
  instructor: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  id_dojo: string;
  id_graduation: string;
}

class UpdateInstructorUseCase {
  constructor(private dojoRepository: IInstructorRepository) {}

  async execute({
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
  }: IRequest): Promise<Instructor> {
    try {
      return this.dojoRepository.update({
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
      });
    } catch (error) {
      throw new AppError(`Cannot update Instructor: ${error}`);
    }
  }
}

export { UpdateInstructorUseCase };
