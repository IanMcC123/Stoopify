import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    username: { //username of user. It is unique
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    password: { // password of user
        type: String,
        required: true,
    },
    email: { // email of user
        type: String,
        required: true,
        unique: true,
        trim: true, // Remove leading and trailing whitespaces
        lowercase: true, // Convert email to lowercase
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // /^\S+@\S+\.\S+$/ is a regular expression (regex) pattern used for validating email addresses
      },
    address: { // address of user
        street: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        zipCode: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      },
      phoneNumber: { // phone number of user
        type: String,
        required: true,
      },

    },
    {timestamps: true} // time the profile was created
);

const User = mongoose.model('User', userSchema);

export default User;