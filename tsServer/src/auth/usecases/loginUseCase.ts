import IAuthRepo from "../domain/IAuthRepo";
import User from "../domain/userClass";
import IPasswordService from "../services/IPassword";

export default class LoginUseCase {
  constructor(
    private authRepository: IAuthRepo,
    private passwordService: IPasswordService
  ) {}
  public async execute(username: string, password: string, type: string) {
    if (type === "native") {
      return this.nativeLogin(username, password);
    }
    return Promise.reject("Login method unavailable");
  }
  private async nativeLogin(username: string, password: string): Promise<User> {
    const user = await this.authRepository
      .findUser(username)
      .catch((_) => null);

    if (!user) {
      return Promise.reject("User not found!");
    }

    const compareResult = await this.passwordService.compare(
      password,
      user.password
    );

    if (compareResult) return user;
    return Promise.reject("Wrong Password!");
  }
}
