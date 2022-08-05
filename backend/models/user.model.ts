import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    unique: false,
    minLength: 3
  },
  firstName: {
    type: String,
    required: true,
    unique: false
  }, 
  lastName: {
    type: String,
    required: true,
    unique: false
  }
});

const User = mongoose.model('User', userSchema);

export default User;