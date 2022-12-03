import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const newSchema = new Schema({
  subject: {type: String, required: true},
  new: {type: String, required: true},
  date: {type: String, required: true},
});

export default mongoose.model('new', newSchema);