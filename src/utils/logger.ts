import winston from "winston";
import { ENVIRONMENT } from "./secrets";

const logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({ level: ENVIRONMENT === "production" ? "error" : "debug" }),
        new (winston.transports.File)({ filename: "debug.log", level: "debug"})
    ]
});

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;