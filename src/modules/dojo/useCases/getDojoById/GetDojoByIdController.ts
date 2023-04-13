import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetDojoByIdUseCase } from './GetDojoByIdUseCase';
import { z } from 'zod';
import { verify } from 'jsonwebtoken';
import { env } from '../../../../env';

class GetDojoByIdController {
  constructor(private getDojoByIdUseCase: GetDojoByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getDojoBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getDojoBodySchema.parse(request.params);

      const dojos = await this.getDojoByIdUseCase.execute({ id_dojo });

      return response.status(200).json(dojos);
    } catch (error: any) {
      console.error(`Error to get dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetDojoByIdController };
