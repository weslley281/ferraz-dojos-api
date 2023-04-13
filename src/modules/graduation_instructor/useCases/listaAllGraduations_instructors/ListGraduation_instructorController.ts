import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { ListGraduation_instructorUseCase } from './ListGraduation_instructorUseCase';
import { Request, Response } from 'express';

class ListGraduation_instructorController {
  constructor(
    private listGraduation_instructorUseCase: ListGraduation_instructorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduation_instructorBodySchema = z.object({
      id_instructor: z.string(),
    });

    try {
      const { id_instructor } = getGraduation_instructorBodySchema.parse(
        request.params
      );

      const graduations = await this.listGraduation_instructorUseCase.execute({
        id_instructor,
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

export { ListGraduation_instructorController };
