import express from "express";
import AuthController from "./AuthController";
import IAuthRepo from "../domain/IAuthRepo";
import RegisterUseCase from "../usecases/registerUsecase";
import DeleteUseCase from "../usecases/deleteUsecase";
import UpdateUseCase from "../usecases/updateUsecase";
import PasswordService from "../data/services/PasswordService";
import IPasswordService from "../services/IPassword";
import LoginUseCase from "../usecases/loginUseCase";
import JwTTokenService from "../data/services/TokenService";
import ITokenService from "../services/IToken";

export default class AuthRouter {
  public static config(
    authRepo: IAuthRepo,
    passwordService: IPasswordService,
    tokenService: ITokenService
  ): express.Router {
    const router = express.Router();

    let controller = AuthRouter.configController(
      authRepo,
      passwordService,
      tokenService
    );

    router.post("/login", (req: express.Request, res: express.Response) => {
      controller.loginUser(req, res);
    });

    router.post("/signup", (req: express.Request, res: express.Response) =>
      controller.registerUser(req, res)
    );

    router.post("/update", (req: express.Request, res: express.Response) =>
      controller.updateUser(req, res)
    );

    router.post("/delete", (req: express.Request, res: express.Response) =>
      controller.deleteUser(req, res)
    );

    return router;
  }

  private static configController(
    authRepo: IAuthRepo,
    passwordService: IPasswordService,
    tokenService: ITokenService
  ): AuthController {
    const loginUseCase = new LoginUseCase(authRepo, passwordService);
    const registerUseCase = new RegisterUseCase(authRepo, passwordService);
    const updateUseCase = new UpdateUseCase(authRepo);
    const deleteUseCase = new DeleteUseCase(authRepo);

    const controller = new AuthController(
      loginUseCase,
      registerUseCase,
      updateUseCase,
      deleteUseCase,
      tokenService
    );

    return controller;
  }
}
