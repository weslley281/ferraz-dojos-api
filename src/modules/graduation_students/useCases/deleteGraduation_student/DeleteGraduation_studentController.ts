import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteGraduation_studentUseCase } from './DeleteGraduation_studentUseCase';
import { z } from 'zod';

class DeleteGraduation_studentController {
  constructor(
    private deleteGraduation_studentUseCase: DeleteGraduation_studentUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({
      id_graduation_student: z.string(),
    });

    try {
      const { id_graduation_student } = getGraduationBodySchema.parse(
        request.params
      );

      const graduations = await this.deleteGraduation_studentUseCase.execute({
        id_graduation_student,
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

export { DeleteGraduation_studentController };
