import { AppError } from '../../../erros/Error';
import { UpdateMartialArtUseCase } from './UpdateMartialArtUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateMartialArtController {
  constructor(private updateMartialArtUseCase: UpdateMartialArtUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateMartialArtBodySchema = z.object({
      id_martial_art: z.string(),
      martial_art: z.string(),
      description: z.string(),
      id_dojo: z.string(),
    });

    try {
      const { id_martial_art, martial_art, description, id_dojo } =
        updateMartialArtBodySchema.parse(request.body);

      const obj = await this.updateMartialArtUseCase.execute({
        id_martial_art,
        martial_art,
        description,
        id_dojo,
      });

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Error to update Martial Art: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateMartialArtController };
