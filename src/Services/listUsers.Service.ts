import AppDataSource from "../data-source";
import { User } from "../entities/createuser.entity";

export const listUsersService = async (): Promise<User[]> => {
    const userRepo = AppDataSource.getRepository(User);
    return await userRepo.find();
  };