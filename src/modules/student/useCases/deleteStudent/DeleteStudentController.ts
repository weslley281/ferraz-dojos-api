import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { DeleteStudentUseCase } from './DeleteStudentUseCase';
import { z } from 'zod';

class DeleteStudentController {
  constructor(private deleteStudentUseCase: DeleteStudentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStudentBodySchema = z.object({ id_student: z.string() });

    try {
      const { id_student } = getStudentBodySchema.parse(request.params);

      const student = await this.deleteStudentUseCase.execute({
        id_student,
      });

      return response.status(204).json(student);
    } catch (error: any) {
      console.error(`Erro ao delete graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { DeleteStudentController };
