import { Router } from "express";
import { listUsers } from "./user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

export const userRoutes = Router();
userRoutes.get("/", authMiddleware, listUsers);
