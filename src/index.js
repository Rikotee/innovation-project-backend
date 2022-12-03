import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';



import { Movie as MovieModel } from './models/movie';
import Movies from './dataSources/movies';

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './src/schemas/index';
import resolvers from './src/resolvers/index';
import dotenv from 'dotenv';
import connectMongo from './db/db';
import { checkAuth } from './utils/auth';

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
    if (req) {
      const user = await checkAuth(req);
      return { user, req };
    }
  }, })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});