import React, { useState } from 'react';
import { youtubeSearch } from '../utils/getVideoResults'
import appTopics  from '../components/data/topics';
import data from "../components/data/testData.js";


const SearchContext = React.createContext();

console.log("search context rendered")
const SearchContextProvider = (props) => {
  const [videos, setVideos] = React.useState(data.items); // change null to data.items for testData
  const [searchTerm, setSearchTerm] = React.useState(appTopics[0].keywords[Math.floor(Math.random() * appTopics[0].keywords.length)]);

  const [selectedTopic, setSelectedTopic] = React.useState(null);// music topic
  const [focusKeywords, setFocusKeywords] = React.useState(null);

  const [selectedType, setSelectedType] = React.useState(null)

  const [isFocused, setIsFocused] = React.useState(true);
  const [isEducational, setIsEducational] = React.useState(true);

  React.useEffect(() => {
    const usingTestData = true;
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(searchTerm, selectedTopic, selectedType, isEducational);
            setVideos(data);
          }
          getVideos();
      }
      }, [searchTerm, selectedTopic, selectedType, isEducational, isFocused]);

      // React.useEffect(() => {
      //   setSearchTerm(appTopics[0].keywords[Math.floor(Math.random() * appTopics[0].keywords.length)])
      // },[])

      React.useEffect(() => {
        if (selectedTopic === null) {
          setIsFocused(true)
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
        selectedType,
        setSelectedType,
        focusKeywords,
        setFocusKeywords,
        isFocused,
        setIsFocused,
        isEducational,
        setIsEducational
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };