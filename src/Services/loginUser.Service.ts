import { compare } from "bcryptjs";
import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { IUserLogin } from "../interfaces/users";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const loginUserService = async ({ email,  password}: IUserLogin): Promise<any> => {
  const userRes = AppDataSource.getRepository(User);

  const user = await userRes.findOneBy({
    email: email
})


  if (!user) return [401, "Email or PassWord Incorrect"];
  
  const passwordalid = await compare(password, user.password)
  
  if (!passwordalid) return [401, "Email or PassWord Incorrect"];

  const token = jwt.sign({isAdm: user.isAdm }, process.env.SECRET_KEY, {
      expiresIn: '24h',
      subject: String(user.id)
    }
)


  return [200, token]
};
