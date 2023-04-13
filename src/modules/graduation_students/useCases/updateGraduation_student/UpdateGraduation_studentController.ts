import { AppError } from '../../../erros/Error';
import { UpdateGraduation_studentUseCase } from './UpdateGraduation_studentUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateGraduation_studentController {
  constructor(
    private updateGraduation_studentUseCase: UpdateGraduation_studentUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateGraduationBodySchema = z.object({
      id_graduation_student: z.string(),
      id_student: z.string(),
      id_graduation: z.string(),
      id_dojo: z.string(),
    });

    try {
      const { id_graduation_student, id_student, id_graduation, id_dojo } =
        updateGraduationBodySchema.parse(request.body);

      const obj = await this.updateGraduation_studentUseCase.execute({
        id_graduation_student,
        id_student,
        id_graduation,
        id_dojo,
      });

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Error to update graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateGraduation_studentController };
