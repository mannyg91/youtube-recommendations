/* eslint-disable no-undef */

export const youtubeSearch = async (query, topicId, type) => {

  function loadClient() {
    gapi.client.setApiKey(process.env?.REACT_APP_YOUTUBE_API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
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

    return gapi.client.youtube.search.list(parameters)
      .then((response) => {
        console.log('fetched search data');
        return response.result.items;
      }, (err) => {
        console.error('Execute error', err);
      });
  }

  function interlaceAndRemoveDuplicates(results1, results2) {
    let results = new Set();
    let i = 0;
    let j = 0;
    while (i < results1.length && j < results2.length) {
      console.log(results1[i], results2[j])
      results.add(results1[i]);
      results.add(results2[j]);
      i++;
      j++;
    }
    while (i < results1.length || j < results2.length) {
      if (i < results1.length) {
        results.add(results1[i]);
        i++;
      }
      if (j < results2.length) {
        results.add(results2[j]);
        j++;
      }
    }
    return [...results];
  }



  gapi.load("client");
  await loadClient();
  const educationResults = await execute(27);
  const scienceResults = await execute(28);

  const data = interlaceAndRemoveDuplicates(educationResults, scienceResults);

  // const data = await execute(27);

  return data;
}

//loadclient initializes client
//execute is run