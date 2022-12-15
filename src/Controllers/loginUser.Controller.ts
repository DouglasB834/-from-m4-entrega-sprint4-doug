import { Request, Response } from "express";
import { loginUserService } from "../Services/loginUser.Service";

export const loginUserController = async (req: Request, res: Response) => {
  const [status, token] = await loginUserService(req.body);

  res.status(status as number).json({ token });
};
