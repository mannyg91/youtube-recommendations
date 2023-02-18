import React, { useState } from 'react';
import { youtubeSearch } from '../utils/getVideoResults'
import appTopics  from '../components/data/topics';
import data from "../components/data/testData.js";


const SearchContext = React.createContext();

const SearchContextProvider = (props) => {
  const [videos, setVideos] = React.useState(null); // change null to data.items for testData
  const [searchTerm, setSearchTerm] = React.useState(appTopics[0].keywords[Math.floor(Math.random() * appTopics[0].keywords.length)]);

  const [selectedTopic, setSelectedTopic] = React.useState(null);// music topic
  const [sliderState, setSliderState] = React.useState(2);
  const [focusKeywords, setFocusKeywords] = React.useState(null);

  const [sliderState2, setSliderState2] = React.useState(2);
  const [selectedType, setSelectedType] = React.useState(null)

  React.useEffect(() => {
    const usingTestData = false;
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(searchTerm, selectedTopic, selectedType);
            console.log(data)
            setVideos(data);
            console.log("videos set")
          }
          getVideos();
      }
      }, [searchTerm, selectedTopic, selectedType]);

      // React.useEffect(() => {
      //   setSearchTerm(appTopics[0].keywords[Math.floor(Math.random() * appTopics[0].keywords.length)])
      // },[])

      React.useEffect(() => {
        if (selectedTopic === null) {
          setSliderState(3)
        }
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
        sliderState2,
        setSliderState2,
        selectedType,
        setSelectedType,
        focusKeywords,
        setFocusKeywords
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };