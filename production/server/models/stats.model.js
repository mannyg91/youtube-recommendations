const mongoose = require('mongoose')

const Stats = new mongoose.Schema(
  {
    keywordId : { type: String, required: true, unique: true },
    selectedTopic : { type: String, required: true },
    keyword : { type: String, required: true },
    averageRating: { type: Number, required: true },
  },
  { collection: 'stats' }
)

const model = mongoose.model('stats', Stats)

module.exports = model