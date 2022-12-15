import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";
import { appErros } from "../error/appErros";
import { IUserRequest } from "../interfaces/users";

export const createUserService = async (data: IUserRequest): Promise<any> => {
  const { email } = data;
  const userRes = AppDataSource.getRepository(User);
  const userExist = await userRes.findOneBy({ email: email });

  if (userExist) {
    throw new appErros("E-mail already registered", 400);
  }
  const user = userRes.create(data);
  await userRes.save(user);

  delete user.password;

  return [201, user];
};
