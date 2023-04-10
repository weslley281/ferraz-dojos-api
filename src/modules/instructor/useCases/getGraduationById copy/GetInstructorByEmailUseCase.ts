import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Instructor';
import { IInstructorRepository } from '../../repositories/IInstructorRepository';

interface IRequest {
  email: string;
}

class GetInstructorByEmailUseCase {
  constructor(private instructorRepository: IInstructorRepository) {}

  async execute({ email }: IRequest): Promise<Instructor> {
    try {
      const instructor = await this.instructorRepository.findByEmail(email);

      if (!instructor) throw new Error('Instructor not exists');

      return instructor;
    } catch (error) {
      throw new AppError(`Cannot get instructor: ${error}`);
    }
  }
}

export { GetInstructorByEmailUseCase };
