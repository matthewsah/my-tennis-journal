import mongoose, { Schema } from 'mongoose';

const journalLogSchema = new Schema({
  username: {type: String, required: true},
  date: {type: Date, required: true},
  focusItems: {type: Object, required: false},
  reflection: {type: String, required: false},
});

const journalLog = mongoose.model('journalLog', journalLogSchema);

export default journalLog;