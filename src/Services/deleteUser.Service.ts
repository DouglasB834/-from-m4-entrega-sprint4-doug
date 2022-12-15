import AppDataSource from "../data-source"
import { User } from "../entities/createuser.entity"

export const deleteUserService = async(userId:string) =>{

  
    const userRes = AppDataSource.getRepository(User)

    // const user = await userRes.findOneBy({id:userId})

    userRes.update(userId, {isActive: false})
    
    return {}
}
