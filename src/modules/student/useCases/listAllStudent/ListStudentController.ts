import { z } from 'zod';
import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { ListStudentUseCase } from './ListStudentUseCase';

class ListStudentController {
  constructor(private listStudentUseCase: ListStudentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStudentBodySchema = z.object({ id_dojo: z.string() });

    try {
      const { id_dojo } = getStudentBodySchema.parse(request.params);

      const students = await this.listStudentUseCase.execute({ id_dojo });

      return response.status(200).json(students);
    } catch (error: any) {
      console.error(`Error to get Student: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListStudentController };
