import { sendMail } from "./../../utils/email";
import { AuthenticationError } from "apollo-server-express";
import {
  hashPassword,
  validatePassword,
  generateToken,
  handleError,
} from "./../../utils/common";
import { Context } from "../../utils/types";

const register = async (_parent: any, args: any, ctx: Context, _info: any) => {
  try {
    const { prisma } = ctx;
    const { username, fullName, emailId, password, profilePic } = args.input;

    const hashedPassword = hashPassword(password);

    await prisma.user.create({
      data: {
        username,
        fullName,
        emailId,
        profilePic,
        password: hashedPassword,
      },
    });

    return true;
  } catch (error) {
    handleError(error);
  }
};

const login = async (_parent: any, args: any, ctx: Context, _info: any) => {
  try {
    const { prisma } = ctx;
    const { username, emailId, password } = args.input;

    const user = await prisma.user.findFirst({
      where: {
        username,
        emailId,
      },
    });

    if (!validatePassword(password, user?.password!)) {
      return new AuthenticationError("Username or Email is Invalid");
    }

    return generateToken(user!);
  } catch (error) {
    handleError(error);
  }
};

const forgetPassword = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  try {
    const { prisma } = ctx;
    const { emailId } = args.input;

    const user = await prisma.user.findFirst({
      where: {
        emailId,
      },
    });

    const token = generateToken(user!, "3600");
    console.log(token);
    const html = `
    <tbody>
    give the url with token to reset password
    </tbody>`;
    sendMail(user?.emailId!, html);
    return true;
  } catch (error) {
    handleError(error);
  }
};

const resetPassword = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  try {
    const { prisma } = ctx;
    const { emailId, userId, password, confirmPass, token } = args.input;

    // const decoded = verfiyToken(token)
    // let the token verify
    const hashedPassword = hashPassword(password);
    const user = await prisma.user.findFirst({
      where: {
        emailId,
        id: userId,
      },
    });

    await prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: {
        id: userId,
      },
    });

    return true;
  } catch (error) {
    handleError(error);
  }
};

const logout = async (_parent: any, args: any, ctx: Context, _info: any) => {
  try {
    return Boolean(ctx.user);
  } catch (error) {
    handleError(error);
  }
};

export default {
  register,
  login,
  forgetPassword,
  resetPassword,
  logout,
};
