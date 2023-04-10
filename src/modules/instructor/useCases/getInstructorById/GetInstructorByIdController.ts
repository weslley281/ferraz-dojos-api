import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetInstructorByIdUseCase } from './GetInstructorByIdUseCase';
import { z } from 'zod';

class GetInstructorByIdController {
  constructor(private getInstructorByIdUseCase: GetInstructorByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getInstructorBodySchema = z.object({ id_instructor: z.string() });

    try {
      const { id_instructor } = getInstructorBodySchema.parse(request.params);

      const instructors = await this.getInstructorByIdUseCase.execute({
        id_instructor,
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

export { GetInstructorByIdController };
