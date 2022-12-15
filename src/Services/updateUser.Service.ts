import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { IUserUpdate } from "../interfaces/users";

export const updateUserService = async (data :IUserUpdate, userId:string): Promise<User> =>{

    const {email,name,password} =data
    const userRes = AppDataSource.getRepository(User)
    
    const user = await userRes.findOneBy({id: userId})
    // if(!user)[400, "user not Found"]
    // name? name: user.name
    // email? email: user.email
    // password? user.password = await hash( password, 10): null

    const newuser ={
        ...user,
        email:email ? email :user.email,
        name:name? name: user.name,
        password: password? password: user.password
    }
    await userRes.save(newuser)
    delete user.password

    return user
}