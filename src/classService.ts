import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/class", (req, res) => {
  res.status(200).send(["Class 1", "Class 2", "Class 3"]);
});

app.listen(PORT, () => {
  console.log(`Class service is up running on: ${PORT}`);
});
