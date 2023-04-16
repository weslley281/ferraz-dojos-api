import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetMartialArtByIdUseCase } from './GetMartialArtByIdUseCase';
import { z } from 'zod';

class GetMartialArtByIdController {
  constructor(private getMartialArtByIdUseCase: GetMartialArtByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getMartialArtBodySchema = z.object({ id_martial_art: z.string() });

    try {
      const { id_martial_art } = getMartialArtBodySchema.parse(request.params);

      const martialArt = await this.getMartialArtByIdUseCase.execute({
        id_martial_art,
      });

      return response.status(200).json(martialArt);
    } catch (error: any) {
      console.error(`Error to get Martial Art: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetMartialArtByIdController };
