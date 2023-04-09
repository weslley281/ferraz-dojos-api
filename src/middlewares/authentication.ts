import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../modules/erros/Error';
import { DojoRepository } from '../modules/dojo/repositories/implementations/DojoRepository';
import { env } from '../env';

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
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError('JWT token is missing', 401);
    }

    const [, token] = authHeader.split(' ');
    const { sub: id_dojo } = jwt.verify(token, env.JWT_SECRET) as TokenPayload;

    const dojoRepository = new DojoRepository();
    const dojo = await dojoRepository.findById(id_dojo);

    if (!dojo) {
      throw new AppError('Dojo not found', 404);
    }

    return next();
  } catch (error) {
    throw error;
  }
}
