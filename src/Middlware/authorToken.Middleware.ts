import { NextFunction, Request, Response } from "express";
import  jwt  from "jsonwebtoken";

export const authorTokenMiddleware = async ( req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if(!token) return res.status(401).json( {message: "invalid toke authorization headers"})
  
  const userToken = token.split(" ")[1];
  jwt.verify( userToken, process.env.SECRET_KEY, (error, decoded:any) =>{
    if(error) return res.status(401).json({message: error.message});
    req.user ={
      id: decoded.sub,
      isAdm: decoded.isAdm
    }
    return next()

  })
  
};
