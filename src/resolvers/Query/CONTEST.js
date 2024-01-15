import { DEFAULT_LIMIT } from '../../constants.js';
import { prisma } from '../../prisma/database.js';
import _ from 'lodash';

const contestQuery = {
  allContests: async (parent, args, info) => {
    return await prisma.contest.findMany();
  },
  contestInfo: async (parent, args, info) => {
    return await prisma.contest.findUnique({
      where: {
        id: args.data.contestId,
      },
    });
  },

  /**
   * @param {*} parent
   * @param {{data: {contestId: string}, limit: number, after: string}} args
   * @param {*} info
   */
  contestPosts: async (parent, args, info) => {
    const { contestId, userId: currentUserId, after } = args;
    console.log(args);
    let nodes, a;

    a = await prisma.post.findMany({
      where: {
        contestId: contestId,
      },
      orderBy: [
        {
          points: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
    });

    a = _.sortBy(a, ({ userId }) => (userId === currentUserId ? 0 : 1));
    console.log({
      a,
    });

    if (!after) {
      nodes = a.slice(0, 4).map((post) => ({
        node: post,
        cursor: post.id,
      }));

      console.log({
        nodes,
      });
    } else {
      const index = a.findIndex((post) => post.id === after);
      nodes = a.slice(index + 1, index + 3).map((post) => ({
        node: post,
        cursor: post.id,
      }));

      console.log({
        nodes,
      });
    }

    const hasNextPage =
      nodes.length === 0
        ? false
        : nodes.slice(-1)[0].cursor !== a.slice(-1)[0].id;

    return {
      edges: nodes,
      pageInfo: {
        hasNextPage,
        hasPreviousPage: after ? true : false,
        startCursor: nodes.length === 0 ? '' : nodes[0].cursor,
        endCursor: nodes.length === 0 ? '' : nodes.slice(-1)[0].cursor,
      },
    };
  },

  /**
   * @param {*} parent
   * @param {{contestId: string, top: number}} args
   * @param {*} info
   */
  getTopContestPosts: async (parent, args, info) => {
    // const { contestId, top } = args;

    // const result = await prisma.contest_Score.findMany({
    //   where: {
    //     contestId: contestId,
    //   },
    //   take: top,
    //   include: {
    //     post: true,
    //   },
    //   orderBy: [
    //     { score: 'desc' },
    //     {
    //       createdAt: 'asc',
    //     },
    //   ],
    // });

    // if (result.length === 0) return [];

    // return result.map((each) => each.post);

    return await prisma.post.findMany({
      where: {
        contestId: args.data.contestId,
      },
      orderBy: [
        {
          points: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
      take: 5,
    });
  },
};

export default contestQuery;
