import { Router } from "express";
import { welcomeService } from "../services/userService.js";

const router = Router();

router.get("/", welcomeService);

export default router;
