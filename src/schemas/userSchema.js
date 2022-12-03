import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
    user(id: ID!): User
    login(username: String!, password: String!): User
    admins(start: Int, limit: Int): [User]
  }

  extend type Mutation {
    registerUser(username: String!, password: String!, admin: Boolean! = false): User
  }

  type User {
    id: ID
    username: String
    admin: Boolean
    token: String
  }
`;
