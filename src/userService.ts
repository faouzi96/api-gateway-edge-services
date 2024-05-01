import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/user", (req, res) => {
  res.status(200).send(["student 1", "student 2", "student 3"]);
});

app.listen(PORT, () => {
  console.log(`User service is up running on: ${PORT}`);
});
