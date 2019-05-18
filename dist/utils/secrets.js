"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import logger from "./logger";
const dotenv_1 = __importDefault(require("dotenv"));
// logger.debug("Using .env file to supply config environment variables");
dotenv_1.default.config({ path: ".env" });
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === "production"; // Else dev
exports.SESSION_SECRET = process.env["SESSION_SECRET"]; // TODO use this?
exports.MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
exports.STEAM_API_KEY = process.env["STEAM_API_KEY"];
if (!exports.SESSION_SECRET) {
    // logger.error("No client secret. Set SESSION_SECRET environment variable.");
    console.log("No client secret. Set SESSION_SECRET environment variable.");
    process.exit(1);
}
if (!exports.MONGODB_URI) {
    // logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}
if (!exports.STEAM_API_KEY) {
    // logger.error("No steam API key. Set STEAM_API_KEY environment variable.");
    console.log("No steam API key. Set STEAM_API_KEY environment variable.");
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map