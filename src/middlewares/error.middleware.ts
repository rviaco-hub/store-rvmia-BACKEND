export const errorMiddleware = (err: any, _: any, res: any, __: any) => {
  res.status(500).json({ error: err.message });
};
