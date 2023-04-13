import { AppError } from '../../../erros/Error';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IDojoRepository } from '../../repositories/IDojoRepository';
import { env } from '../../../../env';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUseCase {
  constructor(private dojoRepository: IDojoRepository) {}

  async execute({ email, password }: IRequest): Promise<string> {
    try {
      const dojo = await this.dojoRepository.findByEmail(email);

      if (!dojo) throw new Error('E-mail ou senha incorretos!');

      if (
        typeof dojo.id_dojo !== 'string' ||
        typeof dojo.dojo !== 'string' ||
        typeof dojo.email !== 'string'
      ) {
        throw new Error('Objeto Dojo inválido!');
      }

      const passwordMatch = await compare(
        password,
        dojo.password ? dojo.password : ''
      );

      if (!passwordMatch) throw new Error('E-mail ou senha incorretos!');

      const token = sign({}, env.JWT_SECRET, {
        subject: dojo.id_dojo,
        expiresIn: '7d',
      });

      // const tokenReturn: IResponse = {
      //   token,
      //   dojo: {
      //     id_dojo: dojo.id_dojo,
      //     dojo: dojo.dojo,
      //     email: dojo.email,
      //   },
      // };

      return token;
    } catch (error) {
      throw new AppError(`Não foi possível autenticar o Dojo: ${error}`);
    }
  }
}

export { AuthenticateUseCase };
