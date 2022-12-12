import { Request, Response, Router } from "express";


export const RouteMain = Router();


RouteMain.get("/gg" , (req: Request, res:Response) =>{
    return res.json({message: "chama nenem "})
})