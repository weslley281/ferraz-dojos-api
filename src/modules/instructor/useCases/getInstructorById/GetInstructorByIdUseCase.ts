import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Instructor';
import { IInstructorRepository } from '../../repositories/IInstructorRepository';

interface IRequest {
  id_instructor: string;
}

class GetInstructorByIdUseCase {
  constructor(private instructorRepository: IInstructorRepository) {}

  async execute({ id_instructor }: IRequest): Promise<Instructor> {
    try {
      const instructor = await this.instructorRepository.findById(
        id_instructor
      );

      if (!instructor) throw new Error('Instructor not exists');

      return instructor;
    } catch (error) {
      throw new AppError(`Cannot get instructor: ${error}`);
    }
  }
}

export { GetInstructorByIdUseCase };
