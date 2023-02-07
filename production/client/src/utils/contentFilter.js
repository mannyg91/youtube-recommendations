export const isRestricted = (video) => {

  // returns true if content passes the filter

  const filterOn = true

  if (filterOn) {
    console.log("entered filter")

    const videoTitle = video.snippet.title.toLowerCase();
    const videoChannel = video.snippet.channelTitle.toLowerCase();
    const titleAndChannel = videoTitle.concat("", videoChannel)

    //
    console.log(titleAndChannel)
    console.log(isNotEnglish(titleAndChannel) || isKidsContent(titleAndChannel))
    return isNotEnglish(titleAndChannel) || isKidsContent(titleAndChannel) || containsRestrictedWords(titleAndChannel)
  }

  // return false

}

// needs work, filters out more content than it should
function isNotEnglish(str) {
  const pattern = /^[A-Za-z0-9\s.,!?&*#;]+$/;
  return pattern.test(str);
}

function isKidsContent(str) {
  const strWords = str.split(' ');
  const kidsContentKeywords = ['kids', 'abc', 'nursery', 'phonics', 'blippi', 'rhymes', 'pre-k', 'kindergarten', 'kids\'']
  return strWords.some(word => kidsContentKeywords.includes(word));
}

function containsRestrictedWords(str) {
  const strWords = str.split(' ');
  const restrictedKeywords = ['vocabulary','esl','phrases']
  return strWords.some(word => restrictedKeywords.includes(word));
}


