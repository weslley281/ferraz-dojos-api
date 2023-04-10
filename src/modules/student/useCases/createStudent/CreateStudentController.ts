import { AppError } from '../../../erros/Error';
import { CreateInstructorUseCase } from './CreateStudentUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateInstructorController {
  constructor(private createInstructorUseCase: CreateInstructorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createGraduationBodySchema = z.object({
      id_instructor: z.string(),
      instructor: z.string(),
      phone: z.string(),
      email: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      city: z.string(),
      country: z.string(),
      state: z.string(),
      id_graduation: z.string(),
      id_dojo: z.string(),
    });

    const id_instructor = randomUUID();
    console.log(request.body);
    try {
      const {
        instructor,
        phone,
        email,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_graduation,
        id_dojo,
      } = createGraduationBodySchema.parse(request.body);

      const obj = await this.createInstructorUseCase.execute({
        id_instructor,
        instructor,
        phone,
        email,
        address_line1,
        address_line2,
        city,
        country,
        state,
        id_graduation,
        id_dojo,
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

export { CreateInstructorController };
