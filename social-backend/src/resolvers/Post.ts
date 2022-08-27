import prisma from "../db/prisma";

const Post = {
  comments: (paren) => {
    return prisma.comment.findMany({
      where: {
        postId: paren.id,
      },
    });
  },
  user: (parent) => {
    return prisma.user.findMany({
      where: {
        id: parent.userId,
      },
    });
  },
};
export default Post;
