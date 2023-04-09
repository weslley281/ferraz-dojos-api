import { AppError } from '../../../erros/Error';
import { CreateGraduationUseCase } from './CreateGraduationUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateGraduationController {
  constructor(private createGraduationUseCase: CreateGraduationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createGraduationBodySchema = z.object({
      graduation: z.string(),
      description: z.string(),
      id_dojo: z.string(),
    });

    const id_graduation = randomUUID();
    console.log(request.body);
    try {
      const { graduation, description, id_dojo } =
        createGraduationBodySchema.parse(request.body);

      const paid_out = false;

      const obj = await this.createGraduationUseCase.execute({
        id_graduation,
        graduation,
        description,
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

export { CreateGraduationController };
