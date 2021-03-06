import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";



interface IAuthenticateUserRequest {
  email: "string";
  password: "string";
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);


    const user = await usersRepositories.findOne({
      email
    });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    }, "aac7fa1d791a8a59c06b62814277265c", {
      subject: user.id,
      expiresIn: "1d",
    });

    return token;
  }
}

export { AuthenticateUserService };