import New from '../models/newsModel';

export default {
  Query: {
    event: async (parent, args, context, { news }) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        return await New.findById(args.id);
      },

          // find list
    news: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      const start = args.start || 0;
      const limit = args.limit || 100;
      const news = New.find().skip(start).limit(limit);

      return args.bounds
        ? news
            .find()
        : news;
    },

  },
  Mutation: {
    addNews: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        try {
          const newNew = new New(args);
          const result = await newNew.save();
          return result;
        } catch (err) {
          throw new Error(err);
        }
      },
    // for editing news
    modifyNews: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await New.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteNews: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await New.findByIdAndDelete(args.id, args);
    },
  },
};