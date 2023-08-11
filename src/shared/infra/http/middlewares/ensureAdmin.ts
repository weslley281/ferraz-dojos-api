import { NextFunction, Request, Response } from "express";

import { DojoRepository } from "@modules/dojo/repositories/implementations/DojoRepository";
import { AppError } from "@shared/erros/AppError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = new DojoRepository();
  const user = await usersRepository.findById(id);

  if (!user) {
    throw new AppError("User isn't admin!");
  }

  return next();
}