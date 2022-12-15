import { Request, Response } from "express";
import { createUserService } from "../Services/createuserService";

export const createUserController = async (req: Request, res: Response) => {
  const [status, data] = await createUserService(req.body);
  res.status(status as number).json(data);
};
