import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { ListMartialArtUseCase } from './ListMartialArtUseCase';
import { Request, Response } from 'express';

class ListMartialArtController {
  constructor(private listMartialArtUseCase: ListMartialArtUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getMartialArtBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getMartialArtBodySchema.parse(request.params);

      const martialArts = await this.listMartialArtUseCase.execute({ id_dojo });

      return response.status(200).json(martialArts);
    } catch (error: any) {
      console.error(`Error to get Martial Art: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListMartialArtController };
