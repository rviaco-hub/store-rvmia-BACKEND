import { getUsers } from "./user.service";
import { ok } from "../../utils/response";

export const listUsers = async (_: any, res: any) =>
  ok(res, await getUsers());
