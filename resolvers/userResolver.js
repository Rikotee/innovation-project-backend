import bcrypt from 'bcrypt';
import User from '../models/userModel';
import { login } from '../utils/auth';
import { AuthenticationError } from 'apollo-server-express';

export default {
  Query: {
    // find user by id.
    user: async (parent, args, context, { user }) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await User.findById(args.id);
    },
    login: async (parent, args, { req }) => {
      req.body = args;
      return await login(req);
    },
    admins: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      const start = args.start || 0;
      const admins = (await User
        .find()
        .skip(start))
        .filter((a) => a.admin == true)
        .slice(0, 10);

      return args.bounds
        ? admins.find(): admins;
    },
  },
  Mutation: {
    registerUser: async (parent, args) => {
      try {
        const hash = await bcrypt.hash(args.password, 12);
        const userWithHash = {
          ...args,
          password: hash,
        };
        const newUser = new User(userWithHash);
        const result = await newUser.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
