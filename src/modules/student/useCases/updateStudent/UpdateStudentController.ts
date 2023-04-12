import { AppError } from '../../../erros/Error';
import { UpdateStudentUseCase } from './UpdateStudentUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateStudentController {
  constructor(private updateStudentUseCase: UpdateStudentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateStudentBodySchema = z.object({
      id_student: z.string(),
      student: z.string(),
      phone: z.string(),
      email: z.string(),
      birthday: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      city: z.string(),
      country: z.string(),
      state: z.string(),
      id_dojo: z.string(),
      responsible: z.string(),
      responsible_phone: z.string(),
    });

    try {
      const {
        id_student,
        student,
        phone,
        email,
        birthday,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_dojo,
        responsible,
        responsible_phone,
      } = updateStudentBodySchema.parse(request.body);

      const obj = await this.updateStudentUseCase.execute({
        id_student,
        student,
        phone,
        email,
        birthday,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_dojo,
        responsible,
        responsible_phone,
      });

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Error to update student: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateStudentController };
