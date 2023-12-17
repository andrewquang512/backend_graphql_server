import { prisma } from '../../prisma/database.js';

const Tag = {
  posts: async (parent, args, info) => {
    return await prisma.post.findMany({
      where: {
        tag: { has: parent.id },
      },
    });
  },
};

export default Tag;
