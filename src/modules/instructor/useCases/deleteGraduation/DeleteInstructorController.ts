import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteInstructorUseCase } from './DeleteInstructorUseCase';
import { z } from 'zod';

class DeleteInstructorController {
  constructor(private deleteInstructorUseCase: DeleteInstructorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getInstructorBodySchema = z.object({ id_instructor: z.string() });

    try {
      const { id_instructor } = getInstructorBodySchema.parse(request.params);

      const instructor = await this.deleteInstructorUseCase.execute({
        id_instructor,
      });

      return response.status(204).json(instructor);
    } catch (error: any) {
      console.error(`Erro ao delete graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteInstructorController };
