import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    user(id: ID!): User
    login(username: String!, password: String!): User
  }

  extend type Mutation {
    registerUser(username: String!, password: String!): User
  }

  type User {
    id: ID
    username: String
    token: String
  }
`;
