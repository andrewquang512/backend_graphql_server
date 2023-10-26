import { prisma } from "../../database.js";

const Level = {
  userId: async (parent, args, info) => {
    return await prisma.user.findUnique({
      where: {
        id: parent.userId,
      },
    });
  },
};

export default Level;
