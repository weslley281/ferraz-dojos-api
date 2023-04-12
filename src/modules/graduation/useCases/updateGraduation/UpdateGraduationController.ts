import { AppError } from '../../../erros/Error';
import { UpdateGraduationUseCase } from './UpdateGraduationUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateGraduationController {
  constructor(private updateGraduationUseCase: UpdateGraduationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateGraduationBodySchema = z.object({
      id_graduation: z.string(),
      graduation: z.string(),
      description: z.string(),
      id_martial_art: z.string(),
      id_dojo: z.string(),
    });

    try {
      const {
        id_graduation,
        graduation,
        description,
        id_martial_art,
        id_dojo,
      } = updateGraduationBodySchema.parse(request.body);

      const obj = await this.updateGraduationUseCase.execute({
        id_graduation,
        graduation,
        description,
        id_martial_art,
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

export { UpdateGraduationController };
