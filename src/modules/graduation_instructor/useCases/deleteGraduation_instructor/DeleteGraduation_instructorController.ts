import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteGraduation_instructorUseCase } from './DeleteGraduation_instructorUseCase';
import { z } from 'zod';

class DeleteGraduation_instructorController {
  constructor(
    private deleteGraduation_instructorUseCase: DeleteGraduation_instructorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({
      id_graduation_instructor: z.string(),
    });

    try {
      const { id_graduation_instructor } = getGraduationBodySchema.parse(
        request.params
      );

      const graduations = await this.deleteGraduation_instructorUseCase.execute(
        {
          id_graduation_instructor,
        }
      );

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

export { DeleteGraduation_instructorController };
