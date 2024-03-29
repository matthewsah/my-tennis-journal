import mongoose from 'mongoose';

const journalLogSchema = new mongoose.Schema({
  username: {type: String, required: true},
  date: {type: Date, required: true},
  focusItems: {type: Object, required: false},
  reflection: {type: String, required: false},
  logComplete: {type: Boolean, required: true}
});

const JournalLog = mongoose.model('JournalLog', journalLogSchema);

export default JournalLog;