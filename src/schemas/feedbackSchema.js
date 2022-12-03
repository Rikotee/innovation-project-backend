import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    feedbacks: [Feedback]
    feedback(id: ID!): Feedback
  }

  extend type Mutation {
    addFeedback(subject: String!, feedback: String!, email: String, date: String!): Feedback
    modifyFeedback(id: ID!, subject: String!, feedback: String, email: String, date: String): Feedback
    deleteFeedback(id: ID!, subject: String, feedback: String, email: String, date: String): Feedback
  }

  type Feedback {
    id: ID
    subject: String
    feedback: String
    email: String
    date: String
  }
`;
