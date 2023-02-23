const User = require('./models/user.model.js')
const Stats = require('./models/stats.model.js')


async function updateStats(keywordRatingId) {
  console.log("update stats 1", keywordRatingId)
  //id correctly passed
    const result = await User.aggregate([
      { $match: { 'keywordRatings.keywordRatingId': keywordRatingId } },
      { $unwind: '$keywordRatings' },
      { $match: { 'keywordRatings.keywordRatingId': keywordRatingId  } },
      { $group: { _id: '$keywordRatings.keyword', averageRating: { $avg: '$keywordRatings.rating' } } },
      { $project: { _id: 1, averageRating: 1 } }
    ]);


// this keeps returning null

  console.log("update stats 13", result)

  try {
    const stats = new Stats({
      keywordId: keywordRatingId,
      selectedTopic: 'example',
      keyword: result.length > 0 ? result[0]._id : null,
      averageRating: result.length > 0 ? result[0].averageRating : null
    });
    const savedStats = await stats.save();
    return savedStats;

  }catch {
    console.log("id failed")
    return
  }



}

module.exports = updateStats;