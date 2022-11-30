import { UpdateResult } from "mongodb";
import mongoose from "mongoose";
import IAuthRepo from "../../domain/IAuthRepo";
import User from "../../domain/userClass";
import { UserModel, UserSchema } from "../models/user";

export default class AuthRepo implements IAuthRepo {
  constructor(private readonly client: mongoose.Mongoose) {}

  public async findUser(username: string): Promise<User> {
    const allUsers = this.client.model<UserModel>("User", UserSchema);

    const user = await allUsers.findOne({ username: username });

    if (!user) return Promise.reject("User not found!");

    return new User(
      user.id,
      user.firstName,
      user.lastName,
      user.username,
      user.password
    );
  }

  public async add(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ): Promise<string> {
    const userModel = this.client.model<UserModel>("User", UserSchema);

    const addedUser = await userModel.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    });

    await addedUser.save();

    return addedUser.id;
  }

  public async update(
    username: string,
    updateKey: string,
    value: string
  ): Promise<boolean> {
    const allUsers = this.client.model<UserModel>("User", UserSchema);

    const user = await this.findUser(username);

    if (user) {
      const result = await allUsers.updateOne(
        {
          username: user.username,
        },
        { [updateKey]: value }
      );

      return result.acknowledged;
    } else {
      return Promise.reject("User update failed");
    }
  }

  public async delete(username: string): Promise<boolean> {
    const allUsers = this.client.model<UserModel>("User", UserSchema);

    const user = await allUsers.findOne({ username: username });

    if (user) {
      const result = await allUsers.deleteOne({ username: username });
      return result.acknowledged;
    }

    return Promise.reject("User doesn't exist");
  }
}
