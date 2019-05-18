// import logger from "./logger";
import dotenv from "dotenv";

// logger.debug("Using .env file to supply config environment variables");
dotenv.config({ path: ".env" });

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === "production"; // Else dev

export const SESSION_SECRET = process.env["SESSION_SECRET"]; // TODO use this?
export const MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
export const STEAM_API_KEY = process.env["STEAM_API_KEY"];

if (!SESSION_SECRET) {
    // logger.error("No client secret. Set SESSION_SECRET environment variable.");
    console.log("No client secret. Set SESSION_SECRET environment variable.");
    process.exit(1);
}

if (!MONGODB_URI) {
    // logger.error("No mongo connection string. Set MONGODB_URI environment variable.");
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

if (!STEAM_API_KEY) {
    // logger.error("No steam API key. Set STEAM_API_KEY environment variable.");
    console.log("No steam API key. Set STEAM_API_KEY environment variable.");
    process.exit(1);
}
