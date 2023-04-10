import { AppError } from '../../../erros/Error';
import { Instructor } from '../../models/Student';
import { IInstructorRepository } from '../../repositories/IStudentRepository';

interface IRequest {
  id_instructor: string;
}

class DeleteInstructorUseCase {
  constructor(private instructorRepository: IInstructorRepository) {}

  async execute({ id_instructor }: IRequest): Promise<void> {
    try {
      const instructor = await this.instructorRepository.delete(id_instructor);

      return instructor;
    } catch (error) {
      throw new AppError(`Cannot delete Instructor: ${error}`);
    }
  }
}

export { DeleteInstructorUseCase };
