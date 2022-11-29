import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    events: [Event]
    event(id: ID!): Event
  }

  extend type Mutation {
    addEvent(subject: String!, event: String!, date: String!): Event
    modifyEvent(id: ID!, subject: String!, event: String, date: String): Event
    deleteEvent(id: ID!, subject: String, event: String, date: String): Event
  }

  type Event {
    id: ID
    subject: String
    event: String
    date: String
  }
`;
