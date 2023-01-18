
Fetch query:
`fetch('https://youtube138.p.rapidapi.com/search?part=snippet&q=music&regionCode=US&maxResults=1', options)`

``` json
{
  "kind": "youtube#searchListResponse",
  "nextPageToken": "CAEQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 1
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "GFox20FtKzU"
      },
      "snippet": {
        "publishedAt": "2023-01-18T13:00:09Z",
        "channelId": "UCIWAwKP3_KcWned5aLqZHtw",
        "title": "Cozy Jazz Music at Cozy Coffee Shop Ambience ☕ Relaxing Jazz Instrumental Music to Studying, Working",
        "description": "Cozy Jazz Music at Cozy Coffee Shop Ambience ☕ Relaxing Jazz Instrumental Music to Studying, Working Good morning ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GFox20FtKzU/default_live.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GFox20FtKzU/mqdefault_live.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GFox20FtKzU/hqdefault_live.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Cozy Coffee Shop",
        "liveBroadcastContent": "live",
        "publishTime": "2023-01-18T13:00:09Z"
      }
    }
  ]
}

```


