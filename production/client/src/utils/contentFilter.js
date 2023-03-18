export const isRestricted = (video) => {

  // returns true if content passes the filter
  const filterOn = true

  if (filterOn) {

    const videoTitle = video.snippet.title.toLowerCase();
    const videoChannel = video.snippet.channelTitle.toLowerCase();
    const titleAndChannel = videoTitle.concat(" ", videoChannel)

    //
    // console.log(titleAndChannel)
    // console.log(isNotEnglish(titleAndChannel) || isKidsContent(titleAndChannel))
    return isNotEnglish(titleAndChannel) || isKidsContent(titleAndChannel) || containsRestrictedWords(titleAndChannel)
  }

  // return false

}

// needs work, filters out more content than it should
function isNotEnglish(str) {
  const pattern = /^[\x00-\x7F]+$/; //defines allowed characters
  const diacritics = /[\u00C0-\u00C5\u00C7-\u00CF\u00D1-\u00D6\u00D9-\u00DD\u00E0-\u00E5\u00E7-\u00EF\u00F1-\u00F6\u00F9-\u00FD\u00FF-\u017F]+/g;
  // return pattern.test(str) || diacritics.test(str);
  // return diacritics.test(str)
  return !pattern.test(str) 
}

function isKidsContent(str) {
  const strWords = str.split(' ');
  const kidsContentKeywords = [
    'kids', 'abc', 'nursery', 'phonics', 'blippi', 'rhymes', 'pre-k', 'kindergarten', 'kids\'' ,'youkids', 'sing-along',
    '#nurseryrhymes', 'piggy','along','PhonicsMan','potty','#children',"#kids","peppa","kidz!","cartoon",
  ]
  return strWords.some(word => kidsContentKeywords.includes(word));
}

function containsRestrictedWords(str) {
  const strWords = str.split(' ');
  const restrictedKeywords = ['vocabulary','esl','phrases','♫', 'pronunciation',]
  return strWords.some(word => restrictedKeywords.includes(word));
}



