import { AppError } from '../../../erros/Error';
import { ListDojoUseCase } from './ListDojoUseCase';
import { Request, Response } from 'express';

class ListDojoController {
  constructor(private listDojoUseCase: ListDojoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const dojos = await this.listDojoUseCase.execute();

      return response.status(200).json(dojos);
    } catch (error: any) {
      console.error(`Error to get dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).json({ error: error.message });
      }

      return response.status(400).json({ error: error.error });
    }
  }
}

export { ListDojoController };
