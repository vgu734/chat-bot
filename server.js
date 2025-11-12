import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { startLanguageToolServer } from "./src/config/langToolServer.js";

const APP_PORT = process.env.APP_PORT || 3000;

app.listen(APP_PORT, () => {
    console.log(`Listening on port: ${APP_PORT}`);
});

await startLanguageToolServer();