import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {

  //Receber o token
  const authToken = request.headers.authorization;

  //Validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  //Separar a palavra Bearer e o token e uma string, utilizando um array
  const [, token] = authToken.split(" ");

  try {
    //Validar se token é valido
    const { sub } = verify(
      token,
      "944c9c880be09af1e90da1f883538607" //Chave md5
    ) as IPayload; //forçar que o sub seja uma string

    //Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}