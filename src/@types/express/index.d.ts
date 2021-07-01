//Sobrescrever a biblioteca express para recuperar o id do usuário.
declare namespace Express {//Padrão para sobrescrever uma biblioteca
  export interface Request {//Vai pegar toda tipagem que tem dentro do index
    user_id: string;//Vai acrescentar essa variável dentro da tipagem
  }
}