import prisma from "../db/prisma";

const Query = {
  user: async (parent, args, ctx, info) => {
    try {
      const { id } = args;
      return await prisma.user.findUnique({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return error;
    }
  },
  post: async (parent, args, ctx, info) => {
    try {
      const { id } = args;
      return await prisma.post.findUnique({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return error;
    }
  },
  comment: async (parent, args, ctx, info) => {
    try {
      const { id } = args;
      console.log(parent);
      return;
      return await prisma.comment.findUnique({
        where: {
          id: +id,
        },
      });
    } catch (error) {
      return error;
    }
  },
};

export default Query;
