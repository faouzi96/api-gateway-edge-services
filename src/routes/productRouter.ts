import { Router } from "express";
import { welcomeService } from "../services/productService.js";

const router = Router();

router.get("/", welcomeService);

export default router;
