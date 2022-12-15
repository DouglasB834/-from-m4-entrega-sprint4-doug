import { Request, Response } from "express";
import { deleteUserService } from "../Services/deleteUser.Service";

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const [status, data] = await deleteUserService(id);
  return res.status(status as number).json([data]);
};
