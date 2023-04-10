import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetInstructorByEmailUseCase } from './GetStudentByEmailUseCase';
import { z } from 'zod';

class GetInstructorByEmailController {
  constructor(
    private getInstructorByEmailUseCase: GetInstructorByEmailUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getInstructorBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getInstructorBodySchema.parse(request.params);

      const instructors = await this.getInstructorByEmailUseCase.execute({
        email,
      });

      return response.status(200).json(instructors);
    } catch (error: any) {
      console.error(`Error to get instructor: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetInstructorByEmailController };
