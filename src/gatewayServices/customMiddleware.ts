import { RequestHandler } from "express";

export const logRequestMiddleware: RequestHandler = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} | ${req.path}`);
  next();
};
