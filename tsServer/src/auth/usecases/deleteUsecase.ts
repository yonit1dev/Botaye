import IAuthRepo from "../domain/IAuthRepo";

export default class DeleteUseCase {
  constructor(private authRepository: IAuthRepo) {}

  public async execute(username: string): Promise<boolean> {
    const user = await this.authRepository.findUser(username);

    if (!user) return Promise.reject("User not found!");

    const result = await this.authRepository.delete(username);

    return result;
  }
}
