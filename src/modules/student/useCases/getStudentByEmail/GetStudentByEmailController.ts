import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetStudentByEmailUseCase } from './GetStudentByEmailUseCase';
import { z } from 'zod';

class GetStudentByEmailController {
  constructor(private getStudentByEmailUseCase: GetStudentByEmailUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getStudentBodySchema = z.object({ email: z.string() });

    try {
      const { email } = getStudentBodySchema.parse(request.params);

      const student = await this.getStudentByEmailUseCase.execute({
        email,
      });

      return response.status(200).json(student);
    } catch (error: any) {
      console.error(`Error to get Student: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetStudentByEmailController };
