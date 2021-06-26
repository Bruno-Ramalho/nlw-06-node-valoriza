import { Request, Response } from "express";
import { ListUserReceivedComplementsService } from "../services/ListUserReceivedComplementsService";


class ListUserReceivedComplementsController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceivedComplementsService = new ListUserReceivedComplementsService();

    const compliments = await listUserReceivedComplementsService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListUserReceivedComplementsController };