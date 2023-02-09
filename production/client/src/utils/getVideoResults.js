/* eslint-disable no-undef */

export const youtubeSearch = async (query, topic) => {

  function loadClient() {
    gapi.client.setApiKey(process.env?.REACT_APP_YOUTUBE_API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "q": query,
      "type": "video",
      "regionCode": "us",
      "relevanceLanguage": "en",
      "safeSearch": "moderate",
      "videoDefinition": "high",
      "maxResults":"50",
      "videoCategoryId": "27",
      "topicId": topic,
      // "prettyPrint": true,
    })
        .then(function(response) {
                console.log("fetched search data")
                return response.result
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
  await loadClient();
  const data = await execute();
  return data;
}