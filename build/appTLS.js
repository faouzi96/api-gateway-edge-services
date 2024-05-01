"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const https_1 = __importDefault(require("https"));
const app = (0, express_1.default)();
const PORT = 3000;
const sslOptions = {
    key: (0, fs_1.readFileSync)("private-key.pem"),
    cert: (0, fs_1.readFileSync)("certificate.pem")
};
app.get("/", (req, res) => {
    res.send("Hello, from secured HTTPS with express");
});
const secureServer = https_1.default.createServer(sslOptions, app);
secureServer.listen(PORT, () => {
    console.log("Server up running on Port: " + PORT);
});
