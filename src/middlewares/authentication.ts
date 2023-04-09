import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../modules/erros/Error';
import { DojoRepository } from '../modules/dojo/repositories/implementations/DojoRepository';

interface IPayload {
  sub: string;
}

export async function verifyJWT(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('Token missing', 401);

    const [, token] = authHeader.split(' ');

    const { sub: user_id } = verify(token, 'orderofservice') as IPayload;

    const usersRepository = new DojoRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError('User does not exists', 401);

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
