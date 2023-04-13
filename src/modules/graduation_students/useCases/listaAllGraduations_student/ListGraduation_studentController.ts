import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { ListGraduation_studentUseCase } from './ListGraduation_studentUseCase';
import { Request, Response } from 'express';

class ListGraduation_studentController {
  constructor(
    private listGraduation_studentUseCase: ListGraduation_studentUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduation_studentBodySchema = z.object({
      id_student: z.string(),
    });

    try {
      const { id_student } = getGraduation_studentBodySchema.parse(
        request.params
      );

      const graduations = await this.listGraduation_studentUseCase.execute({
        id_student,
      });

      return response.status(200).json(graduations);
    } catch (error: any) {
      console.error(`Error to get graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListGraduation_studentController };
