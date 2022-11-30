import IAuthRepo from "../domain/IAuthRepo";
import IPasswordService from "../services/IPassword";

export default class RegisterUseCase {
  constructor(
    private authRepository: IAuthRepo,
    private passwordService: IPasswordService
  ) {}

  public async execute(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ): Promise<string> {
    const user = await this.authRepository
      .findUser(username)
      .catch((_) => null);

    if (user) return Promise.reject("Username taken!");

    let passwordHashed = await this.passwordService.hash(password);

    const newUser = await this.authRepository.add(
      firstName,
      lastName,
      username,
      passwordHashed
    );

    return newUser;
  }
}
