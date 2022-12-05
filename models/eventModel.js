import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  subject: {type: String, required: true},
  event: {type: String, required: true},
  date: {type: String, required: true},
  eventdate: {type: String, required: true},
});

export default mongoose.model('event', eventSchema);