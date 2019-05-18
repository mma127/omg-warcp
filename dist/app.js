"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./utils/logger"));
const secrets_1 = require("./utils/secrets");
logger_1.default.log("debug", secrets_1.SESSION_SECRET + " " + secrets_1.MONGODB_URI + " " + secrets_1.STEAM_API_KEY);
const app = express_1.default();
app.set("port", process.env.PORT || 3000);
app.get("/", (request, response) => {
    response.send("warcp");
});
exports.default = app;
//# sourceMappingURL=app.js.map