
## General
- YouTube's recommendations are too narrow
- There's a large portion of recommendations that don't fit "watching mood"
	- we can characterize "Watching mood" on two continuums
		- existing recommendations vs. novel (new) content 
		- casual entertainment vs. mentally demanding

## Concept 

- Homepage oriented. Focusing on homepage recommendations only. Similar to Netflix. Can expand scope as the project progresses. The idea is to immediately find content as soon as you go on the website, not to improve existing searches.

#### 2 Sliders / Dials:

##### Old algorithm vs new novel content (controlled randomness)
- The middle of this dial would be tangentially or laterally related content
	- new forms/derivations of what you already are recommended
- Possible indicators:
	- View count
	- Synonym / not a synonym (wordsAPI)
	- Is type of / is not a type of (wordsAPI)
	- Related to content in my current recommendations / not related
		- gathers information about your current YouTube likes and recommendations?
		- builds a list of randomized search queries based upon the desired level of novelty/uniqueness?
	- multi-variable calculation (novelty score?)
		- slider returns recommendations that fall within this novelty score
			- each recommendation represents an individual search?
			- user maybe shown a dozen videos initially, as they scroll down more searches are done

##### Intellectual/productive content vs. mindless casual entertainment
- Possible indicators:
	- View count
	- Keywords like "how to", "explained", "why the"
	- Using YouTube categories/topics

###### Useful API Calls/Parameters 
- `q` parameter specifies the query term to search for
	- Can also include Boolean NOT (`-`) and OR (`|`)
- `relatedToVideoId` parameter that allows you to retrieve a list of videos that are related to a video
-  `topicId` parameter which indicates that the API response should only contain resources associated with the specified topic. 
- `videoCategoryId` parameter filters video search results based on their [category](https://developers.google.com/youtube/v3/docs/videoCategories)


**- Features:**
	- Log in with Google Authentication
	- Excludes content inappropriate/profane content
		- There is a `safeSearch` query parameter
		- List of banned/censored words
			- This could be stored in database
	- Possibly exclude certain categories you never want to see
		- ex.) golf, beauty, cars, politics, etc.
	- Watch the content straight from the website
		- autoplay on hover?
	- Push content to your YouTube playlists or "watch later" lists
		- Could include in-house favorites. The ability to like a video and be saved to the website's playlist, utilizing the database, can later push to youtube playlists.
	- Night mode toggle?


**WordsAPI:**
- Thesaurus
- includes hierarchical information
	- a hatchback is a type of car
	- a finger is part of a hand
- has a limit of 2,500 free requests per day

##### What it is:
- A way to discover new content you wouldn't normally be exposed to
- A way to have some degree of control between casual entertainment vs. cerebral content

##### What it is not:
- A way to simply "improve" YouTube recommendations
	- Their recommendations are already good by the standard of matching you up with what it knows you've watched / liked in the past
- A way to simply generate completely random/uncontrolled recommendations

##### Other:
- Database could store userdata like 
- Count / analyze sets of hashtags for comparisons?
	- ex. percentage of common hashtags
- Should possibly use React's styled-components
	- allows for styling on each component, vs in one global CSS sheet
- Could have multiple categories (sidebar) that each also have their own sliders/dials
- An api exists for YouTube subtitles: https://rapidapi.com/yashagarwal/api/subtitles-for-youtube/
- Take advantage of an encylopedia API to add information about a given topic in a video?
	- Summaries and snippets below the video?
	- Or could use the facts API - Facts API https://rapidapi.com/apininjas/api/facts-by-api-ninjas/
- There is a randomWords API https://rapidapi.com/sheharyar566/api/random-words5/
- Word Associations API https://rapidapi.com/twinword/api/word-associations/
- Topic Tagging API. Meant for blogs https://rapidapi.com/twinword/api/topic-tagging/
- People Also Ask API https://rapidapi.com/yaxeon/api/people-also-ask-api/
- React-Player is **a React component that plays audio-visual files from various URLs**, including file paths, YouTube links, Facebook links, Twitch links, SoundCloud links, Streamable links, Vimeo links, Wistia links, Mixcloud links, DailyMotion links, Kaltura links, and so on.


#### Technical:
- Will want to use React's `useEffect` with a dependency of the dial's state
	- "When the dial's state is changed, call useEffect which will fetch new videos"
- Things that will change and be used across multiple components should probably be set as states (videos, category chosen, novelty amount, etc.)

### Research:
#### YouTube API
- [[YouTube API]]
- Code samples: https://github.com/youtube/api-samples

