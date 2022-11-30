import bcrypt from "bcrypt";
import IPasswordService from "../../services/IPassword";

export default class PasswordService implements IPasswordService {
  private readonly salt = 10;

  public async hash(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, this.salt);

    return hashedPassword;
  }
  public async compare(
    enteredPassword: string,
    retrievedPassword: string
  ): Promise<boolean> {
    const result = await bcrypt.compare(enteredPassword, retrievedPassword);

    return result;
  }
}
