import { RequestHandler } from "express";
import http, { IncomingMessage, ServerResponse } from "http";
import HttpProxy, { ServerOptions } from "http-proxy";

const proxy = HttpProxy.createProxyServer();

const services: ServerOptions[] = [
  { target: "http://localhost:3001/" },
  { target: "http://localhost:3002/" },
  { target: "http://localhost:3003/" }
];

// load the load balancing middleware
export const loadBalancing = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) => {
  const { url } = req;
  const randomService = services[Math.floor(Math.random() * services.length)];
  proxy.web(req, res, {
    target: randomService.target + (url || "")
  });
};
