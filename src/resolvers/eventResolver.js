import Event from '../models/eventModel';

export default {
  Query: {
    event: async (parent, args, context, { event }) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        return await Event.findById(args.id);
      },


          // find list
    events: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      const start = args.start || 0;
      const limit = args.limit || 100;
      const events = Event.find().skip(start).limit(limit);

      return args.bounds
        ? events
            .find()
        : events;
    },

  },
  Mutation: {
    addEvent: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
        try {
          const newEvent = new Event(args);
          const result = await newEvent.save();
          return result;
        } catch (err) {
          throw new Error(err);
        }
      },
    // for editing events
    modifyEvent: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await Event.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteEvent: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authorised');
      }
      return await Event.findByIdAndDelete(args.id, args);
    },
  },
};