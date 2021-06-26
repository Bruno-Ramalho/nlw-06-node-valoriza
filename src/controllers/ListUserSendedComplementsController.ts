import { Request, Response } from "express";
import { ListUserSendedComplementsService } from "../services/ListUserSendedComplementsService";


class ListUserSendedComplementsController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendedComplementsService = new ListUserSendedComplementsService();

    const compliments = await listUserSendedComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserSendedComplementsController };