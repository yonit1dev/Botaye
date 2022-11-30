import IAuthRepo from "../domain/IAuthRepo";

export default class UpdateUseCase {
  constructor(private authRepository: IAuthRepo) {}

  public async execute(
    username: string,
    key: string,
    value: string
  ): Promise<boolean> {
    const user = await this.authRepository.findUser(username);

    if (!user) return Promise.reject("User not found!");

    const result = await this.authRepository.update(username, key, value);

    return result;
  }
}
