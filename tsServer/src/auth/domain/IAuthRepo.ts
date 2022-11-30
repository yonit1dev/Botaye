import User from "./userClass";

export default interface IAuthRepo {
  findUser(username: string): Promise<User>;
  add(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ): Promise<string>;
  update(username: string, updateKey: string, value: string): Promise<boolean>;
  delete(username: string): Promise<boolean>;
}
