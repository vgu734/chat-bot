import { spawn } from "child_process";
import { createRequire } from "module";
import { platform } from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LANGTOOL_PORT = process.env.LANGTOOL_PORT || 8081;
const LT_PATH = path.resolve(__dirname, "../tools/LanguageTool-6.6/languagetool-server.jar");

const require = createRequire(import.meta.url);
const findProcess = require("find-process");

async function killExistingProcess(port) {
    try {
        const list = await findProcess('port', port);
        if (list.length === 0) return;
        for (const proc of list) {
            if (platform() === 'win32') {
                spawn("taskkill", ["/PID", proc.pid.toString(), "/F"], { stdio: "ignore" });
            } else {
                process.kill(proc.pid, "SIGTERM");
            }
        }
    } catch {}
}

export async function startLanguageToolServer() {
    await killExistingProcess(LANGTOOL_PORT);

    let ltProcess = spawn("java", [
        "-jar",
        LT_PATH,
        "--port", LANGTOOL_PORT.toString(),
        "--lazy",
        "--languages", "en",
        "--allow-origin", "*",
    ], {
        detached: true,
        stdio: "ignore",
    });

    console.log("Started LanguageTool on port", LANGTOOL_PORT);

    process.on("exit", () => {
        if (ltProcess) ltProcess.kill();
    });
    process.on("SIGINT", () => process.exit());
    process.on("SIGTERM", () => process.exit());
}