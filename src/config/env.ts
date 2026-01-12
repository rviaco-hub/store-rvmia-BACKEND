import dotenv from "dotenv";
import path from "path";

// CARGA EXPLÍCITA DEL .env
dotenv.config({
  path: path.resolve(process.cwd(), ".env"),
});

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI no está definido en el archivo .env");
}

if (!process.env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET no está definido en el archivo .env");
}

export const env = {
  PORT: process.env.PORT || "4000",
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
