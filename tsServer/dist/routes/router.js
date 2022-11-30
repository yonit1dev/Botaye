import express from "express";
export const router = express.Router();
router.get("/", (req, res, next) => {
    res.status(200);
    res.json("Connected to server!");
});
