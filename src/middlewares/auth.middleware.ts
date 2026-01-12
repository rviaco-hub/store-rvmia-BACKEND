import { verifyToken } from "../utils/jwt";

export const authMiddleware = (req: any, _: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) throw new Error("No autorizado");
  req.user = verifyToken(token);
  next();
};
