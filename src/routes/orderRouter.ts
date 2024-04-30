import { Router } from "express";
import { welcomeService } from "../services/orderService.js";

const router = Router();

router.get("/", welcomeService);

export default router;
