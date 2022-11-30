var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserSchema } from "../models/user";
export default class AuthRepo {
    constructor(client) {
        this.client = client;
    }
    //   public async find(username: string): Promise<User> {
    //   }
    add(firstName, lastName, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = this.client.model("User", UserSchema);
            const addedUser = yield userModel.create({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
            });
            yield addedUser.save();
            return addedUser.id;
        });
    }
}
