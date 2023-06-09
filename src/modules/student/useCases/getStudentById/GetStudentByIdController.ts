import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetStudentByIdUseCase } from './GetStudentByIdUseCase';
import { z } from 'zod';

class GetStudentByIdController {
  constructor(private getStudentByIdUseCase: GetStudentByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStudentBodySchema = z.object({ id_student: z.string() });

    try {
      const { id_student } = getStudentBodySchema.parse(request.params);

      const student = await this.getStudentByIdUseCase.execute({
        id_student,
      });

      return response.status(200).json(student);
    } catch (error: any) {
      console.error(`Error to get student: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetStudentByIdController };
