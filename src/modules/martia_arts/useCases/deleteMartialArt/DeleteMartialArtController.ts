import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteMartialArtUseCase } from './DeleteMartialArtUseCase';
import { z } from 'zod';

class DeleteMartialArtController {
  constructor(private deleteMartialArtUseCase: DeleteMartialArtUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getMartialArtBodySchema = z.object({ id_martial_art: z.string() });

    try {
      const { id_martial_art } = getMartialArtBodySchema.parse(request.params);

      const martialArts = await this.deleteMartialArtUseCase.execute({
        id_martial_art,
      });

      return response.status(204).json(martialArts);
    } catch (error: any) {
      console.error(`Erro ao delete Martial Art: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteMartialArtController };
