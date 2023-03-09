import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to web server!");
});

app.get("/data", (req, res) => {
  res.json({ msg: "Mother Fucker!" });
});

app.listen(PORT, () => {
  console.log(`App start at PORT ${PORT}`);
});
