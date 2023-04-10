import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { ListInstructorUseCase } from './ListStudentUseCase';

class ListInstructorController {
  constructor(private listInstructorUseCase: ListInstructorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getInstructorBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getInstructorBodySchema.parse(request.params);

      const instructors = await this.listInstructorUseCase.execute({ id_dojo });

      return response.status(200).json(instructors);
    } catch (error: any) {
      console.error(`Error to get instructor: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListInstructorController };
