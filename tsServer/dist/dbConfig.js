var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import AuthRouter from "./auth/AuthRouter";
import AuthRepo from "./auth/data/repo/AuthRepo";
export default class DBConnection {
    static config() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client = new mongoose.Mongoose();
            const dbUrl = encodeURI(process.env.DATABASE);
            yield this.client.connect(dbUrl);
        });
    }
    static authRouter() {
        const repo = new AuthRepo(this.client);
        return AuthRouter.config(repo);
    }
}
