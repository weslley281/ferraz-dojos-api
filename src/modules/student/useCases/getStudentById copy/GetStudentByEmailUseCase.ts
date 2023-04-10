import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Student';
import { IInstructorRepository } from '../../repositories/IStudentRepository';

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
