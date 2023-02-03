const express = require("express");
const app = express();

if (process.env.MODE != "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT;
const MODE = process.env.MODE;
const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.json({
    PORT,
    MODE,
    MONGO_URL,
  });
});

app.listen(PORT, () => {
  console.log({
    PORT,
    MODE,
    MONGO_URL,
  });
});
