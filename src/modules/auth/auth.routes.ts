import { Router } from "express";
import { registerCtrl, loginCtrl } from "./auth.controller";

export const authRoutes = Router();
authRoutes.post("/register", registerCtrl);
authRoutes.post("/login", loginCtrl);
