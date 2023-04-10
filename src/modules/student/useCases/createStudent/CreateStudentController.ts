import { AppError } from '../../../erros/Error';
import { CreateStudentUseCase } from './CreateStudentUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateStudentController {
  constructor(private createStudentUseCase: CreateStudentUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createStudentBodySchema = z.object({
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
      id_graduation: z.string(),
      id_dojo: z.string(),
      responsible: z.string(),
      responsible_phone: z.string(),
    });

    const id_instructor = randomUUID();
    console.log(request.body);
    try {
      const {
        student,
        phone,
        email,
        birthday,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_graduation,
        id_dojo,
        responsible,
        responsible_phone,
      } = createStudentBodySchema.parse(request.body);

      const id_student = randomUUID();

      const obj = await this.createStudentUseCase.execute({
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
        id_graduation,
        id_dojo,
        responsible,
        responsible_phone,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.error(`Error to create instructor: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateStudentController };
