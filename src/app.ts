import express from "express";

import logger from "./utils/logger";
import { SESSION_SECRET, MONGODB_URI, STEAM_API_KEY } from "./utils/secrets";

logger.log("debug", SESSION_SECRET + " " + MONGODB_URI + " " + STEAM_API_KEY);
const app = express();

app.set("port", process.env.PORT || 4000);

app.get("/", (request, response) => {
    response.send("warcp");
});



export default app;