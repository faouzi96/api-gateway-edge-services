import rateLimit from "express-rate-limit";
import morgan from "morgan";

// Rate Limiting middleware
export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  limit: 10,
  message: "Rate Limit exceeded. Please retry later."
});

// morgan: sets the logging for all the incoming requests
export const morganMiddleware = morgan("combined");
