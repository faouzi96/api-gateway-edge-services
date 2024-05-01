import express from "express";

const expressApp = express();

const PORT = process.env.PORT || 3000;

expressApp.get("/api", (req, res) => {
  res.send("Hello! This is a simple node js app!");
  res.end();
});

expressApp.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
