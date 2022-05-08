import prisma from "../db/prisma";

const Comment = {
  post: (parent) => {
    return prisma.post.findUnique({
      where: {
        id: parent.postId,
      },
    });
  },
  user: (parent) => {
    return prisma.user.findUnique({
      where: {
        id: parent.userId,
      },
    });
  },
};
export default Comment;
