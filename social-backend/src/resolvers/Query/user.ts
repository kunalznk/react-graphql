import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const user = async (_parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user: User } = ctx;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: User?.id ?? parseInt(args.id),
      },
    });

    return user;
  } catch (error) {
    handleError(error);
  }
};

const users = async (_parent: any, args: any, ctx: Context, _info: any) => {
  const { prisma, user: User } = ctx;
  const { username, fullName } = args.input;
  try {
    const users = await prisma.user.findMany({
      where: {
        username,
        fullName,
        // can we implment followers  of user in same method
      },
    });

    return users;
  } catch (error) {
    handleError(error);
  }
};
export default {
  user,
  users,
};
