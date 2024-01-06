import gql from 'graphql-tag';

const imageDefs = gql`
  extend type Query {
    allImageInfos: [ImageInfo]!
  }

  # extend type Mutation {
  #   createImage(data: CreateImageInput!): Image!
  # }

  # input CreateImageInput {
  #   url: String!
  #   hash: String!
  # }

  type ImageInfo {
    id: ID!

    camera: String
    lens: String
    aperture: String
    focalLength: String
    shutterSpeed: String
    ISO: String
    takenWhen: String
    copyRight: String

    imageId: Image!
  }
`;

export default imageDefs;
