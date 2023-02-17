/* eslint-disable no-undef */

export const youtubeSearch = async (query, topicId, type) => {

  async function loadClient() {
    await gapi.client?.setApiKey(process.env?.REACT_APP_YOUTUBE_API_KEY);
    return gapi.client?.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(function () { console.log("GAPI client loaded for API"); },
        function (err) { console.error("Error loading GAPI client for API", err); });
  }

  function execute(videoCategoryId) {
    const parameters = {
      part: [
        'snippet'
      ],
      q: query,
      type: 'video',
      regionCode: 'us',
      relevanceLanguage: 'en',
      safeSearch: 'moderate',
      videoDefinition: 'high',
      maxResults: '50'
    };

    if (videoCategoryId) {
      parameters.videoCategoryId = videoCategoryId;
    }

    if (topicId) {
      parameters.topicId = topicId;
    }

    return gapi.client?.youtube.search.list(parameters)
      .then((response) => {
        console.log('fetched search data');
        return response.result.items;
      }, (err) => {
        console.error('Execute error', err);
      });
  }
  
  function interlaceAndRemoveDuplicates(results1, results2) {
    const resultIds = new Set();
    const results = [];
  
    for (let i = 0, j = 0; i < results1.length || j < results2.length; ) {
      const item1 = results1[i];
      const item2 = results2[j];
  
      if (!item1 && item2) {
        results.push(item2);
        j++;
      } else if (!item2 && item1) {
        results.push(item1);
        i++;
      } else if (item1.id.videoId === item2.id.videoId) {
        results.push(item1);
        i++;
        j++;
      } else if (resultIds.has(item1.id.videoId)) {
        i++;
      } else if (resultIds.has(item2.id.videoId)) {
        j++;
      } else {
        results.push(item1, item2);
        i++;
        j++;
        resultIds.add(item1.id.videoId);
        resultIds.add(item2.id.videoId);
      }
    }
  
    return results;
  }


  gapi.load("client");
  await loadClient();
  const educationResults = await execute(27);
  const scienceResults = await execute(28);

  const data = interlaceAndRemoveDuplicates(educationResults, scienceResults);
  console.log(data)
  // const data = await execute(27);

  return data;
}

//loadclient initializes client
//execute is run