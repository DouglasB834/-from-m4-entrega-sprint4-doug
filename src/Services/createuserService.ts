import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import {IUserRequest } from "../interfaces/users";

export const createUserService = async (data: IUserRequest): Promise<any> => {
  const {email} = data
  const userRes = AppDataSource.getRepository(User);
  const userExist = await userRes.findOneBy({email: email})

  if(userExist){
    return [400, {message: "E-mail already registered"}]
  }
  const user = userRes.create(data);
  await userRes.save(user);
// logica de valiar email 
  delete user.password;

  return [201, user];
};


