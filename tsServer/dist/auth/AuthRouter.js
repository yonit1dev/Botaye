import express from "express";
import AuthController from "./AuthController";
export default class AuthRouter {
    static config(authRepo) {
        const router = express.Router();
        const controller = new AuthController(authRepo);
        router.post("/register", (req, res) => {
            controller.registerUser(req, res);
        });
    }
}
