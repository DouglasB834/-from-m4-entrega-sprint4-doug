import { Router } from "express";
import { createUserController } from "../Controllers/createUser.Controller";
import { deleteUserController } from "../Controllers/deleteuser.Controller";
import { listUsersController } from "../Controllers/listUsers.Controller";
import { retrieveUserController } from "../Controllers/retrieveUser.Controller";
import { authorTokenMiddleware } from "../Middlware/authorToken.Middleware";
import { isAdmUserMiddleware } from "../Middlware/isAdmUser.Middleware";


export const RouteMain = Router();

RouteMain.post("" , createUserController)

RouteMain.get("", authorTokenMiddleware, isAdmUserMiddleware, listUsersController)
RouteMain.get("/:id", retrieveUserController)

RouteMain.delete("/:id",authorTokenMiddleware, deleteUserController)