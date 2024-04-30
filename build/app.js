"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressApp = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
expressApp.get("/api", (req, res) => {
    res.send("Hello! This is a simple node js app!");
    res.end();
});
expressApp.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
