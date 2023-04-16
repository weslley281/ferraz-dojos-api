import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetMartialArtByNameUseCase } from './GetMartialArtByNameUseCase';
import { z } from 'zod';

class GetMartialArtByNameController {
  constructor(private getMartialArtByNameUseCase: GetMartialArtByNameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getMartialArtBodySchema = z.object({ martial_art: z.string() });

    try {
      const { martial_art } = getMartialArtBodySchema.parse(request.params);

      const martialArt = await this.getMartialArtByNameUseCase.execute({
        martial_art,
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

export { GetMartialArtByNameController };
