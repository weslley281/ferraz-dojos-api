import { AppError } from '../../../erros/Error';
import { CreateGraduation_instructorUseCase } from './CreateGraduation_instructorUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateGraduation_instructorController {
  constructor(
    private createGraduation_instructorUseCase: CreateGraduation_instructorUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createGraduationBodySchema = z.object({
      id_instructor: z.string(),
      id_graduation: z.string(),
      id_dojo: z.string(),
    });

    const id_graduation_instructor = randomUUID();

    try {
      const { id_instructor, id_graduation, id_dojo } =
        createGraduationBodySchema.parse(request.body);

      const obj = await this.createGraduation_instructorUseCase.execute({
        id_graduation_instructor,
        id_instructor,
        id_graduation,
        id_dojo,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.error(`Erro ao cadastrar graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateGraduation_instructorController };
