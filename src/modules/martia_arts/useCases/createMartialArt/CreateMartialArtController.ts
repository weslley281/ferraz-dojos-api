import { AppError } from '../../../erros/Error';
import { CreateMartialArtUseCase } from './CreateMartialArtUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateMartialArtController {
  constructor(private createMartialArtUseCase: CreateMartialArtUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createMartialArtBodySchema = z.object({
      martial_art: z.string(),
      description: z.string(),
      id_dojo: z.string(),
    });

    const id_martial_art = randomUUID();

    try {
      const { martial_art, description, id_dojo } =
        createMartialArtBodySchema.parse(request.body);

      const obj = await this.createMartialArtUseCase.execute({
        id_martial_art,
        martial_art,
        description,
        id_dojo,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.log(`request: ${request.body}`);
      console.error(`Erro ao cadastrar Martial Art: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateMartialArtController };
