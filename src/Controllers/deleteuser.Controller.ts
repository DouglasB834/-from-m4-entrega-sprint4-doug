import { Request, Response } from "express";
import { deleteUserService } from "../Services/deleteUser.Service";


export const deleteUserController = async(req:Request, res: Response)=>{
    const  {id} = req.params
    const data = deleteUserService(id)
    return res.status(200).json({})

}