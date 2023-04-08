import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetDojoByEmailUseCase } from './GetDojoByEmailUseCase';
import { z } from 'zod';

class GetDojoByEmailController {
  constructor(private getDojoByIdUseCase: GetDojoByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getDojoBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getDojoBodySchema.parse(request.params);

      const dojos = await this.getDojoByIdUseCase.execute({ email });

      return response.status(200).json(dojos);
    } catch (error: any) {
      console.error(`Error to get dojo dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetDojoByEmailController };
