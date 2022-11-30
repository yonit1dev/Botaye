import * as jwt from "jsonwebtoken";
import ITokenService from "../../services/IToken";

export default class JwTTokenService implements ITokenService {
  constructor(private readonly key: string) {}

  encode(payload: string | object): string | object {
    let token = jwt.sign({ data: payload }, this.key, {
      issuer: "com.YOLETLabs",
      expiresIn: "2h",
      algorithm: "HS256",
    });

    return token;
  }
  decode(token: string): string | object {
    try {
      let decoded = jwt.verify(token, this.key);
      return decoded;
    } catch (error) {
      return "Invalid token";
    }
  }
}
