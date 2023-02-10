import React, { useState } from 'react';
import { youtubeSearch } from '../utils/getVideoResults'
import appTopics  from '../components/data/topics';
import data from "../components/data/testData.js";


const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  const [videos, setVideos] = React.useState(null); // change null to data.items for testData
  const [searchTerm, setSearchTerm] = React.useState("history");
  const [selectedTopic, setSelectedTopic] = React.useState("/m/04rlf");// music topic
  const [sliderState, setSliderState] = React.useState(2);
  const [focusKeywords, setFocusKeywords] = React.useState(null);

  React.useEffect(() => {
    const usingTestData = false;
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(searchTerm, selectedTopic);
            setVideos(data.items);
          }
          getVideos();
      }
      }, [searchTerm, selectedTopic]);

      React.useEffect(() => {
        setFocusKeywords(appTopics.filter(obj => obj.id === selectedTopic)[0].keywords)
      }, [selectedTopic])

  return (
    <SearchContext.Provider
      value={{
        videos,
        setVideos,
        searchTerm,
        setSearchTerm,
        selectedTopic,
        setSelectedTopic,
        sliderState,
        setSliderState,
        focusKeywords,
        setFocusKeywords
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };