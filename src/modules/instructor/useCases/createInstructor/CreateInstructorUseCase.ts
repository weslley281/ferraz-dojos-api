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
}

class CreateInstructorUseCase {
  constructor(private graduationRepository: IInstructorRepository) {}

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
    id_dojo,
  }: IRequest): Promise<Instructor> {
    const dojoAlreadyExists = await this.graduationRepository.findByEmail(
      email ? email : ''
    );

    if (dojoAlreadyExists) throw new Error('Instructor already exists');

    try {
      return this.graduationRepository.create({
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
      });
    } catch (error) {
      throw new AppError(`Cannot create Instructor: ${error}`);
    }
  }
}

export { CreateInstructorUseCase };
