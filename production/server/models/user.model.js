const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedVideos: [{ type: Object }],
    keywordRatings: [
      {
        keywordRatingId: { type: String },
        keyword: { type: String },
        topic: { type: String },
        rating: { type: Number }, // <-- Add this field
      },
    ],
    passwordResetToken: { type: String },
    passwordResetTokenExpiration: { type: Date },
  },
  { collection: 'user' }
);

const model = mongoose.model('user', User)

module.exports = model