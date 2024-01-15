import { prisma } from '../../prisma/database.js';
import { pubsub } from '../../index.js';

const messageMutation = {
  createMessage: async (parent, args, info) => {
    let result, chat;
    try {
      result = await prisma.message.create({
        data: {
          message: args.data.message,
          isImage: args.data.isImage,
          userId: args.data.userId,
          chatId: args.data.chatId,
        },
      });

      // console.log({ result }, 'chat');

      chat = await prisma.chat.update({
        where: {
          id: args.data.chatId,
        },
        data: {
          lastMessageAt: result.createdAt,
        },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }

    pubsub.publish('MESSAGE_CREATED', {
      createdMessage: result,
    });
    pubsub.publish('UPDATE_STATUS_CHAT', {
      updateStatusChat: chat,
    });

    return result;
  },
  deleteMessage: async (parent, args, info) => {
    let result;
    try {
      result = await prisma.message.delete({
        where: {
          id: args.data.messageId,
        },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }

    return result;
  },
  deleteAllMessage: async (parent, args, info) => {
    let result;
    try {
      result = await prisma.message.deleteMany({});
    } catch (e) {
      console.log(e);
      throw e;
    }

    return result;
  },
};

export default messageMutation;
