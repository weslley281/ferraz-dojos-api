import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Instructor';
import { IInstructorRepository } from '../../repositories/IInstructorRepository';

interface IRequest {
  id_dojo: string;
}

class ListInstructorUseCase {
  constructor(private instructorRepository: IInstructorRepository) {}

  async execute({ id_dojo }: IRequest): Promise<Instructor[]> {
    try {
      const instructors = await this.instructorRepository.list(id_dojo);

      if (!instructors) throw new Error('Cannot get Instructor');

      return instructors;
    } catch (error) {
      throw new AppError(`Cannot get instructor: ${error}`);
    }
  }
}

export { ListInstructorUseCase };
