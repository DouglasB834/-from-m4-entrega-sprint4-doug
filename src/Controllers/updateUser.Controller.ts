import { Request, Response } from "express";
import { updateUserService } from "../Services/updateUser.Service";

const updateUserController = async (req:Request , res:Response) =>{
    const {id} = req.params
    const  data = updateUserService(req.body, id)
    return res.status(200).json(data)

}