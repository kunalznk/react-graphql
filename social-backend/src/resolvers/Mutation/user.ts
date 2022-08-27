import { Context } from "../../utils/types";
import { handleError } from "./../../utils/common";

const updateUser = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user: User } = ctx;
  const { input } = args;

  try {
    const user = await prisma.user.update({
      data: input,
      where: {
        id: User?.id,
      },
    });

    return user;
  } catch (error) {
    handleError(error);
  }
};

const deleteUser = async (
  _parent: any,
  args: any,
  ctx: Context,
  _info: any
) => {
  const { prisma, user: User } = ctx;

  try {
    await prisma.user.delete({
      where: {
        id: User?.id,
      },
    });

    // delete post comment likes tags from system;

    return true;
  } catch (error) {
    handleError(error);
  }
};

export default {
  updateUser,
  deleteUser,
};
