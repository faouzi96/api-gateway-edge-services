/**
 * THIS APPLICATION WILL NOT WORK, FOR THE SIMPLE RAISON THAT THE CERTIFICATE AND THE PRIVATE KEY ARE NOT CORRECTLY GENERATED
 */
import express from "express";
import { readFileSync } from "fs";
import https, { ServerOptions } from "https";

const app = express();
const PORT = 3000;

const sslOptions: ServerOptions = {
  key: readFileSync("private-key.pem"),
  cert: readFileSync("certificate.pem")
};

app.get("/", (req, res) => {
  res.send("Hello, from secured HTTPS with express");
});

const secureServer = https.createServer(sslOptions, app);

secureServer.listen(PORT, () => {
  console.log("Server up running on Port: " + PORT);
});
