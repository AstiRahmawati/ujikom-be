import express from "express";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import  userController  from "../controllers/user-controller.js";
import { publicRouter } from "./public-api.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.get("/api/users/current", userController.get);
userRouter.delete("/api/users/logout", userController.logout);

export {userRouter}