import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  subject: {type: String, required: true},
  feedback: {type: String, required: true},
  email: {type: String, required: false},
  date: {type: String, required: true},
});

export default mongoose.model('Feedback', feedbackSchema);