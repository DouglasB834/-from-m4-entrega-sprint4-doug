import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { IUserUpdate } from "../interfaces/users";

export const updateUserService = async (data :IUserUpdate, userId:string): Promise<User> =>{

    const userRes = AppDataSource.getRepository(User)

    const user = userRes.findOneBy({id: userId})

    return 
}