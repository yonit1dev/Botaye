const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/myPlace");

const app = express();
const port = 7070;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Cross-Allow-Origin", "*");
  res.setHeader("Access-Cross-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Cross-Allow-Headers", "Content-Type");

  next();
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}...`);
});
