import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import DBConnection from "./dbConfig";
import { router } from "./routes/router";
dotenv.config();
DBConnection.config();
const PORT = process.env.PORT || 7070;
// const dbName = "Botaye";
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use("/authentication", DBConnection.authRouter);
app.use(router);
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`);
});
