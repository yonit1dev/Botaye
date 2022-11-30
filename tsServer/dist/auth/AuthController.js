var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class AuthController {
    constructor(authRepo) {
        this.authenticationRepo = authRepo;
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, username, password } = req.body;
                return this.authenticationRepo
                    .add(firstName, lastName, username, password)
                    .then((id) => {
                    res.status(200).json({ success: "User Register Success!" });
                })
                    .catch((error) => {
                    res.status(404).json({ error: error });
                });
            }
            catch (error) {
                return res.status(404).json({ error: error });
            }
        });
    }
}
