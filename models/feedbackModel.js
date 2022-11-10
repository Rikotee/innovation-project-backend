import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  feedback: {type: String, required: true},
  subject: {type: String, required: true},
  email: {type: String, required: false},
});

export default mongoose.model('Feedback', feedbackSchema);