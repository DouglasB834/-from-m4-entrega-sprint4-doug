import { NextFunction, Request, Response } from "express";
import { appErros } from "../error/appErros";

export const isAdmUpdaterMiddleware = async ( req: Request, res: Response, next: NextFunction) => { 
    const data = Object.keys(req.body)

    if(data.includes("isAdm") || data.includes("isActive") || data.includes("id")){
        throw new appErros("missing admin permissions", 401)
    } 
    
    return next()
}