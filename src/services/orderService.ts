import { Request, Response } from "express";

export const welcomeService = (req: Request, res: Response) => {
  res.send("Welcome to the Order service!");
};
