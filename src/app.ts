import "reflect-metadata";
import express from "express";
import { RouteMain } from "./Routes/Routes.Main";

const app = express();
app.use(express.json());
app.use("", RouteMain);

export default app;
