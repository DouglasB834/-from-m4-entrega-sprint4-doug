import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";

export const isAdmUserMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
    const id = req.user.id
    const userRes = AppDataSource.getRepository(User)

    const user = await userRes.findOneBy({id:id})

    if(!user){
        return res.status(404).json({message: "user not found"})
    };

    if(!user.isAdm){
       return  res.status(403).json({message: "missing admin permissions"})
    };
    return next()
}