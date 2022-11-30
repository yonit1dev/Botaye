import express, { Response } from "express";
import ITokenService from "../services/IToken";
import DeleteUseCase from "../usecases/deleteUsecase";
import LoginUseCase from "../usecases/loginUseCase";
import RegisterUseCase from "../usecases/registerUsecase";
import UpdateUseCase from "../usecases/updateUsecase";

export default class AuthController {
  private readonly loginUseCase: LoginUseCase;
  private readonly registerUseCase: RegisterUseCase;
  private readonly updateUseCase: UpdateUseCase;
  private readonly deleteUseCase: DeleteUseCase;
  private readonly tokenService: ITokenService;

  constructor(
    loginUseCase: LoginUseCase,
    registerUseCase: RegisterUseCase,
    updateUseCase: UpdateUseCase,
    deleteUseCase: DeleteUseCase,
    tokenService: ITokenService
  ) {
    this.loginUseCase = loginUseCase;
    this.registerUseCase = registerUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteUseCase = deleteUseCase;
    this.tokenService = tokenService;
  }

  public async loginUser(req: express.Request, res: express.Response) {
    try {
      const { username, password } = req.body;

      return this.loginUseCase
        .execute(username, password, "native")
        .then((user) => {
          res.status(200).json({
            authToken: this.tokenService.encode(user.id),
            info: {
              firstName: user.firstName,
              lastName: user.lastName,
              username: user.username,
            },
          });
        })
        .catch((error: Error) => {
          res.status(404).json({ error: error });
        });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  public async registerUser(req: express.Request, res: express.Response) {
    try {
      const { firstName, lastName, username, password } = req.body;

      return this.registerUseCase
        .execute(firstName, lastName, username, password)
        .then((id: string) => {
          res.status(200).json({ success: "User Register Success!", id: id });
        })
        .catch((error: Error) => {
          res.status(404).json({ error: error });
        });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }

  public async updateUser(req: express.Request, res: express.Response) {
    try {
      const { username, options } = req.body;

      return this.updateUseCase
        .execute(username, options.key, options.value)
        .then((result) => {
          if (result) {
            res.status(200).json({ message: "Update Successful" });
          } else {
            res.status(404).json({ message: "Update Failed" });
          }
        })
        .catch((error: Error) => {
          res.status(404).json({ message: error });
        });
    } catch (error) {
      res.status(404).json({ error: error });
    }
  }
  public async deleteUser(req: express.Request, res: express.Response) {
    try {
      const { username } = req.body;

      return this.deleteUseCase
        .execute(username)
        .then((success) => {
          if (success) {
            res.status(200).json({ result: "Delete Success" });
          } else {
            res.status(404).json({ result: "Delete Failed" });
          }
        })
        .catch((error: Error) => {
          res.status(404).json({ error: error });
        });
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }
}
