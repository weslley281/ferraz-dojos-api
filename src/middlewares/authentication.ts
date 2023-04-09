import { AuthenticateUseCase } from '../modules/dojo/useCases/authenticate/AuthenticateUseCase';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../modules/erros/Error';
import { DojoRepository } from '../modules/dojo/repositories/implementations/DojoRepository';

interface TokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id_dojo } = jwt.verify(token, 'ferrazdojos') as TokenPayload;

    const dojoRepository = new DojoRepository();
    const dojo = await dojoRepository.findById(id_dojo);

    if (!dojo) {
      throw new AppError('Dojo not found', 401);
    }

    // request.dojo = {
    //   id_dojo: dojo.id_dojo,
    //   dojo: dojo.dojo,
    //   email: dojo.email,
    // };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
}
