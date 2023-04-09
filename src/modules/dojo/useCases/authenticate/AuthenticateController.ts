import { AppError } from '../../../erros/Error';
import { Request, Response } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';
import { z } from 'zod';

class AuthenticateController {
  constructor(private authenticateUseCase: AuthenticateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const getDojoBodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });

    try {
      const { email, password } = getDojoBodySchema.parse(request.body);

      const tokens = await this.authenticateUseCase.execute({
        email,
        password,
      });

      return response.status(200).json(tokens);
    } catch (error: any) {
      console.error(`Error to authenticate dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { AuthenticateController };
