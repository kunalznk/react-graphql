import prisma from "../db/prisma";

const User = {
  post: async (parent) => {
    return await prisma.post.findMany({
      where: {
        userId: parent.id,
      },
    });
  },
  comment: async (parent) => {
    console.log(parent);
    return await prisma.comment.findMany({
      where: {
        userId: parent.id,
      },
    });
  },
};
export default User;
