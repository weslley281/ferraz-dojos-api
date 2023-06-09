import { AppError } from '../../../erros/Error';
import { UpdateGraduation_instructorUseCase } from './UpdateGraduation_instructorUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateGraduation_instructorController {
  constructor(
    private updateGraduation_instructorUseCase: UpdateGraduation_instructorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateGraduationBodySchema = z.object({
      id_graduation_instructor: z.string(),
      id_instructor: z.string(),
      id_graduation: z.string(),
      id_dojo: z.string(),
    });

    try {
      const {
        id_graduation_instructor,
        id_instructor,
        id_graduation,
        id_dojo,
      } = updateGraduationBodySchema.parse(request.body);

      const obj = await this.updateGraduation_instructorUseCase.execute({
        id_graduation_instructor,
        id_instructor,
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

export { UpdateGraduation_instructorController };
