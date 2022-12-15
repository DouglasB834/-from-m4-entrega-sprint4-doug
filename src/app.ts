import "reflect-metadata";
import express from "express";
import { RouteMain } from "./Routes/user.Routes";
import { loginRoutes } from "./Routes/login.Route";

const app = express();
app.use(express.json());
app.use("/users", RouteMain);
app.use("/login", loginRoutes)

export default app;
