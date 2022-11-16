import { gql } from 'apollo-server-express';
import feedbackSchema from './feedbackSchema.js';
import userSchema from './userSchema.js';
import eventSchema from './eventSchema.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  feedbackSchema,
  eventSchema,
];
