import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentService {
  async execute(user_id: string) {

    const complimentRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }

}

export { ListUserSendComplimentService }