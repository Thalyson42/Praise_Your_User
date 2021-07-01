import { Request, Response } from "express"
import { ListUserReceiveComplimentService } from "../services/ListUserReceiveComplimentService"


class ListUserReceiveComplimentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplimentService = new ListUserReceiveComplimentService();

    const compliments = await listUserReceiveComplimentService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentController }