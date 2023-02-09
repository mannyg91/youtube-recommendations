const mongoose = require('mongoose')

const User = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedVideos: [
      { 
        video: Object,
        videoId: { type: String, required: true, unique: true },
      },
    ],
  },
  { collection: 'user' }
)

const model = mongoose.model('user', User)

module.exports = model