import { register, login } from "./auth.service";
import { ok } from "../../utils/response";

export const registerCtrl = async (req: any, res: any) =>
  ok(res, await register(req.body));

export const loginCtrl = async (req: any, res: any) =>
  ok(res, { token: await login(req.body.email, req.body.password) });
