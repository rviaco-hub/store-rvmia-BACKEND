import { connectDB } from "./config/db";
import { app } from "./app";
import { env } from "./config/env";

(async () => {
  await connectDB();
  app.listen(env.PORT, () => {
    console.log(`🚀 Servidor en puerto ${env.PORT}`);
  });
})();
