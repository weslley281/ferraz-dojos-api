import { AppError } from '../../../erros/Error';
import { ListDojoUseCase } from './ListDojoUseCase';
import { FastifyRequest, FastifyReply } from 'fastify';

class ListDojoController {
  constructor(private listDojoUseCase: ListDojoUseCase) {}

  async handle(
    request: FastifyRequest,
    response: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const dojos = await this.listDojoUseCase.execute();

      return response.status(200).send(dojos);
    } catch (error: any) {
      console.error(`Erro ao cadastrar dojo: ${error}`);

      if (error instanceof AppError) {
        return response.status(error.statusCode).send({ error: error.message });
      }

      return response.status(400).send({ error: error.error });
    }
  }
}

export { ListDojoController };
