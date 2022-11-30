import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import DBConnection from "./dbConfig";

dotenv.config();
DBConnection.config();

const PORT = process.env.PORT || 7070;
// const dbName = "Botaye";
const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/home", (req, res, next) => {
  res.status(200);
  res.json("Connected to server!");

  next();
});

app.use("/auth", DBConnection.authRouter());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}...`);
});
