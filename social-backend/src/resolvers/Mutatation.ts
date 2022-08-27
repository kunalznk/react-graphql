import prisma from "../db/prisma";

const Mutation = {
  createUser: async (parent, args, ctx, info) => {
    try {
      return await prisma.user.create({
        data: args.input,
      });
    } catch (error) {
      return error;
    }
  },

  createPost: async (parent, args, ctx, info) => {
    try {
      const { userId, title, content } = args.input;
      return await prisma.post.create({
        data: {
          userId: parseInt(userId),
          title,
          content,
        },
      });
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  createComment: async (parent, args, ctx, info) => {
    try {
      const { userId, postId, comment } = args.input;

      return await prisma.comment.create({
        data: {
          userId: +userId,
          postId: +postId,
          comment,
        },
      });
    } catch (error) {
      return error;
    }
  },
};

export default Mutation;
