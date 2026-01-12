export const roleMiddleware = (role: string) => (req: any, _: any, next: any) => {
  if (req.user.role !== role) throw new Error("Acceso denegado");
  next();
};
