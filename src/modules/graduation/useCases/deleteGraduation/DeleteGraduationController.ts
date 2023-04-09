import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteGraduationUseCase } from './DeleteGraduationUseCase';
import { z } from 'zod';

class DeleteGraduationController {
  constructor(private deleteGraduationUseCase: DeleteGraduationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({ id_graduation: z.string() });

    try {
      const { id_graduation } = getGraduationBodySchema.parse(request.params);

      const graduations = await this.deleteGraduationUseCase.execute({
        id_graduation,
      });

      return response.status(204).json(graduations);
    } catch (error: any) {
      console.error(`Erro ao delete graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteGraduationController };
