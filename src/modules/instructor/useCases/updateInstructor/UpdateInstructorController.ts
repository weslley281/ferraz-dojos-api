import { AppError } from '../../../erros/Error';
import { UpdateInstructorUseCase } from './UpdateInstructorUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateInstructorController {
  constructor(private updateInstructorUseCase: UpdateInstructorUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const updateInstructorBodySchema = z.object({
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

    try {
      const {
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
      } = updateInstructorBodySchema.parse(request.body);

      const obj = await this.updateInstructorUseCase.execute({
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

      return response.status(200).json(obj);
    } catch (error: any) {
      console.error(`Error to update graduation: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { UpdateInstructorController };
