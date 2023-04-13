import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { GetGraduation_studentByIdUseCase } from './GetGraduation_studentByIdUseCase';
import { z } from 'zod';

class GetGraduation_studentByIdController {
  constructor(
    private getGraduationByIdUseCase: GetGraduation_studentByIdUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getGraduationBodySchema = z.object({
      id_graduation_student: z.string(),
    });

    try {
      const { id_graduation_student } = getGraduationBodySchema.parse(
        request.params
      );

      const graduations = await this.getGraduationByIdUseCase.execute({
        id_graduation_student,
      });

      return response.status(200).json(graduations);
    } catch (error: any) {
      console.error(`Error to get graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { GetGraduation_studentByIdController };
