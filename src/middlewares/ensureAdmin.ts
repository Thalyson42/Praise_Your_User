import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

  //recuperando o user_id da biblioteca
  const { user_id } = request;

  //importando o repositório do usuário
  const usersRepositories = getCustomRepository(UsersRepositories);

  //recuperar se o user_id é admin
  const { admin } = await usersRepositories.findOne(user_id);

  //fazendo a verificação, se for true ele continua o processo da requisição
  if (admin) {
    return next();
  }

  //retornar erro caso o user_id não sejá admin
  return response.status(401).json({
    error: "Unauthorized",
  });
}