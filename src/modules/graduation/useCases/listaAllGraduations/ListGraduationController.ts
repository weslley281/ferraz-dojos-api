import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { ListGraduationUseCase } from './ListGraduationUseCase';
import { Request, Response } from 'express';

class ListGraduationController {
  constructor(private listGraduationUseCase: ListGraduationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getGraduationBodySchema.parse(request.params);

      const graduations = await this.listGraduationUseCase.execute({ id_dojo });

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

export { ListGraduationController };
