import Feedback from '../models/feedbackModel';

export default {
  Query: {
    feedback: async (parent, args, context, { feedback }) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        return await Feedback.findById(args.id);
      },


          // find list
    feedbacks: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      const start = args.start || 0;
      const limit = args.limit || 10;
      const feedbacks = Feedback.find().skip(start).limit(limit);

      return args.bounds
        ? feedbacks
            .find()
        : feedbacks;
    },

  },
  Mutation: {
    addFeedback: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        try {
          const newFeedback = new Feedback(args);
          const result = await newFeedback.save();
          return result;
        } catch (err) {
          throw new Error(err);
        }
      },
    // for editing feedback
    modifyFeedback: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await Feedback.findByIdAndUpdate(args.id, args, { new: true });
    },
  },
};
