import gql from 'graphql-tag';

const cmtDefs = gql`
  # extend type Query {
  #   postComments: [Comment]!
  #   userComments: [Comment]!
  # }

  extend type Mutation {
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(data: DeleteCommentInput!): Comment!
    updateComment(data: UpdateCommentInput!): Comment!
  }

  input CreateCommentInput {
    content: String!
    userId: ID!
    postId: ID!
    storyId: ID!
  }

  input DeleteCommentInput {
    cmtId: ID!
  }

  input UpdateCommentInput {
    cmtId: ID!
    content: String!
  }

  type Comment {
    id: ID!
    content: String!
    createdAt: String!

    userId: User!
    postId: Post!
    storyId: Story!
  }
`;

export default cmtDefs;
