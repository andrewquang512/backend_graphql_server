import * as Prisma from '@prisma/client';

const commentMutation = {
  createComment: async (parent, args, { prisma }, info) => {
    let cmt;
    try {
      cmt = await prisma.comment.create({
        data: {
          content: args.data.content,
          userId: args.data.userId,
          postId: args.data.postId,
          storyId: args.data.storyId,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw e;
    }
    return cmt;
  },
  deleteComment: async (parent, args, { prisma }, info) => {
    let cmt;
    try {
      cmt = await prisma.comment.delete({
        where: {
          id: args.data.cmtId,
        },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e);
      }
      throw e;
    }

    return cmt;
  },
  updateComment: async (parent, args, { prisma }, info) => {
    return await prisma.comment.update({
      where: {
        id: args.data.cmtId,
      },
      data: {
        content: args.data.content,
      },
    });
  },
};

export default commentMutation;
