export default interface IPasswordService {
  hash(password: string): Promise<string>;
  compare(enteredPassword: string, retrievedPassword: string): Promise<boolean>;
}
