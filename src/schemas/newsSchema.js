import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    news: [New]
    new(id: ID!): New
  }

  extend type Mutation {
    addNews(subject: String!, new: String!, date: String!): New
    modifyNews(id: ID!, subject: String!, new: String, date: String): New
    deleteNews(id: ID!, subject: String, new: String, date: String): New
  }

  type New {
    id: ID
    subject: String
    new: String
    date: String
  }
`;
