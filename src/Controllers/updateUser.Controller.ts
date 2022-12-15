import { Request, Response } from "express";
import { updateUserService } from "../Services/updateUser.Service";

const updateUserController = async (req:Request , res:Response) =>{
    const {id} = req.params
    const  data = await updateUserService(req.body, id)
    console.log(data)
    return res.status(200).json(data)

}