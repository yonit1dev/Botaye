import mongoose from "mongoose";
import AuthRouter from "./auth/controllers/AuthRouter";
import AuthRepo from "./auth/data/repo/AuthRepo";
import PasswordService from "./auth/data/services/PasswordService";
import JwTTokenService from "./auth/data/services/TokenService";

export default class DBConnection {
  private static client: mongoose.Mongoose;

  public static async config() {
    this.client = new mongoose.Mongoose();

    const dbUrl = encodeURI(process.env.DATABASE as string);

    await this.client.connect(dbUrl, {
      dbName: "Botaye",
    });
  }

  public static authRouter() {
    const repo = new AuthRepo(this.client);
    const passwordService = new PasswordService();
    const tokenService = new JwTTokenService(process.env.PUBLIC_KEY as string);

    return AuthRouter.config(repo, passwordService, tokenService);
  }
}
