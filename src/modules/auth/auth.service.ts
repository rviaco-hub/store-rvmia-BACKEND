import { User } from "../users/user.model";
import { hashPassword, comparePassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

export const register = async (data: any) => {
  data.password = await hashPassword(data.password);
  return User.create(data);
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password)))
    throw new Error("Credenciales inválidas");
  return signToken({ id: user._id, role: user.role });
};
