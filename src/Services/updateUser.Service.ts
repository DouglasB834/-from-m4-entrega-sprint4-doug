import { hash } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";
import { IUserResponse, IUserUpdate } from "../interfaces/users";
import { resUpdateSchema } from "../Serializer/usersSchemas";

export const updateUserService = async (data :IUserUpdate, userId:string):Promise<IUserResponse| any> =>{
    const {email,name,password} = data
    const userRes = AppDataSource.getRepository(User)

    const user = await userRes.findOneBy({id: userId})
    if(!user) throw new appErros("user not found",404)
    
    await userRes.update(userId, {
        email: email ? email : user.email,
        name: name ? name : user.name,
        password: password ? await hash(password, 10) : user.password,
    });
    
    const getUser = await userRes.findOneBy({id:userId})

    const resUSer = await resUpdateSchema.validate(getUser,{
        stripUnknown:true
    })

    return resUSer
}