import http from "http";
import express from "express";
import { limiter, morganMiddleware } from "./gatewayServices/middlewares.js";
import { loadBalancing } from "./gatewayServices/loadbalancing.js";
import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";
import userRouter from "./routes/userRouter.js";
import { logRequestMiddleware } from "./gatewayServices/customMiddleware.js";

const expressApp = express();

const PORT = process.env.PORT || 3000;

// use middlewares
// apply a middleware for a specific route: expressApp.use("/route", middleware)
expressApp.use(limiter);
expressApp.use(morganMiddleware);
expressApp.use(logRequestMiddleware);

// Routes
expressApp.get("/", (req, res) => {
  res.send("Welcome to the gateway!");
  res.end();
});
expressApp.use("/product", productRouter);
expressApp.use("/order", orderRouter);
expressApp.use("/user", userRouter);

// Load Balancing
expressApp.all("/service*", loadBalancing);
// create separate instances of your backend services
http
  .createServer((req, res) => {
    res.end("Server 1 response!");
  })
  .listen(3001);
http
  .createServer((req, res) => {
    res.end("Server 2 response!");
  })
  .listen(3002);
http
  .createServer((req, res) => {
    res.end("Server 3 response!");
  })
  .listen(3003);

// Port listening
expressApp.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
