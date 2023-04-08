import { AppError } from '../../../erros/Error';
import { UpdateDojoUseCase } from './UpdateDojoUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';

class UpdateDojoController {
  constructor(private updateDojoUseCase: UpdateDojoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createDojoBodySchema = z.object({
      id_dojo: z.string(),
      dojo: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      phone: z.string(),
      email: z.string(),
      paid_out: z.boolean().optional(),
    });

    try {
      const {
        id_dojo,
        dojo,
        address_line1,
        address_line2,
        city,
        state,
        country,
        phone,
        email,
        paid_out,
      } = createDojoBodySchema.parse(request.body);

      const obj = await this.updateDojoUseCase.execute({
        id_dojo,
        dojo,
        address_line1,
        address_line2,
        city,
        state,
        country,
        phone,
        email,
        paid_out,
      });

      return response.status(201).send(obj);
    } catch (error: any) {
      console.error(`Erro ao alterar dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(400).send({ error: error.error });
    }
  }
}

export { UpdateDojoController };
