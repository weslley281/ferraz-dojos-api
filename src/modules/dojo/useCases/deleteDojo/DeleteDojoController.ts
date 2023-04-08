import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteDojoUseCase } from './DeleteDojoUseCase';
import { z } from 'zod';

class DeleteDojoController {
  constructor(private deleteDojoUseCase: DeleteDojoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getDojoBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getDojoBodySchema.parse(request.params);

      const dojos = await this.deleteDojoUseCase.execute({ id_dojo });

      return response.status(204).json(dojos);
    } catch (error: any) {
      console.error(`Erro ao delete dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteDojoController };
