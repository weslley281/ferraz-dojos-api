import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetGraduationByIdUseCase } from './GetGraduationByIdUseCase';
import { z } from 'zod';

class GetGraduationByIdController {
  constructor(private getGraduationByIdUseCase: GetGraduationByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({ id_graduation: z.string() });

    try {
      const { id_graduation } = getGraduationBodySchema.parse(request.params);

      const graduations = await this.getGraduationByIdUseCase.execute({
        id_graduation,
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

export { GetGraduationByIdController };
