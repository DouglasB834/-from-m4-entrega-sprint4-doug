import { NextFunction, Request, Response } from "express";

export const isAdmUserMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
    const isAdm = req.user.isAdm
    if(!isAdm){
        res.status(403).json({message: "missing admin permissions"})
    };

    return next()
}