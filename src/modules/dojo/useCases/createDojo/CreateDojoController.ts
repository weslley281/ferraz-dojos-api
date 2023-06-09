import { AppError } from '../../../erros/Error';
import { CreateDojoUseCase } from './CreateDojoUseCase';
import { Request, Response } from 'express';
import { z } from 'zod';
import { randomUUID } from 'node:crypto';

class CreateDojoController {
  constructor(private createDojoUseCase: CreateDojoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const createDojoBodySchema = z.object({
      dojo: z.string(),
      password: z.string(),
      address_line1: z.string(),
      address_line2: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      phone: z.string(),
      email: z.string(),
    });

    const id_dojo = randomUUID();
    console.log(request.body);
    try {
      const {
        dojo,
        password,
        address_line1,
        address_line2,
        city,
        state,
        country,
        phone,
        email,
      } = createDojoBodySchema.parse(request.body);

      const paid_out = false;

      const obj = await this.createDojoUseCase.execute({
        id_dojo,
        dojo,
        password,
        address_line1,
        address_line2,
        city,
        state,
        country,
        phone,
        email,
        paid_out,
      });

      return response.status(201).json(obj);
    } catch (error: any) {
      console.error(`Erro ao cadastrar dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { CreateDojoController };
