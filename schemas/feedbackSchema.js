import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    feedbacks: [Feedback]
    feedback(id: ID!): Feedback
  }

  extend type Mutation {
    addFeedback(feedback: String!): Feedback
    modifyFeedback(id: ID!, feedback: String): Feedback
  }

  type Feedback {
    id: ID
    feedback: String
  }
`;
