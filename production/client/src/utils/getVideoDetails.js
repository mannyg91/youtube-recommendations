/* eslint-disable no-undef */

export const getVideoDetails = async (id) => {

  function loadClient() {
    gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function execute() {
    return gapi.client.youtube.videos.list({
      "part": [
        "snippet",
        "statistics"
      ],
      "id": id
    })
        .then(function(response) {
                console.log("fetched data")
                console.log(response.result)
                return response.result
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
  await loadClient();
  const data = await execute();
  return data;
}