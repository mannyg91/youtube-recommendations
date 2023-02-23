import React from 'react'
import randomWords from 'random-words';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { SearchContext } from '../hooks/SearchContext';
import Button from "@mui/material/Button";
import ShuffleIcon from '@mui/icons-material/Shuffle';

const SearchAppBar = () => {

  const { ...searchProps } = React.useContext(SearchContext);
  // videos,
  // setVideos,
  // searchTerm,
  // setSearchTerm,
  // selectedTopic,
  // setSelectedTopic,
  // sliderState,
  // setSliderState,
  // focusKeywords,
  // setFocusKeywords

  //create state for search term
  const [searchAppBarTerm, setSearchAppBarTerm] = React.useState('')
  const [searchBarClicked, setSearchBarClicked] = React.useState(false);

  function handleClick() {
    searchProps.setSearchTerm(searchAppBarTerm)
  }


  function getRandomPhrase() {
    searchProps.setSearchTerm(randomWords({ min: 1, max: 1, join: ' ' }));
  }

  function getFocusedPhrase() {
    const focusPhrase = searchProps.focusKeywords[Math.floor(Math.random() * searchProps.focusKeywords.length)];
    searchProps.setSearchTerm(focusPhrase)
  }

  function getMiddlePhrase() {
    if (Math.random() < 0.5) {
      getRandomPhrase()
    } else {
      getFocusedPhrase()
    }
  }


  function handleSpin() {
    setSearchBarClicked(false);
    if (searchProps.sliderState === 3) {
      getFocusedPhrase()
    } else if (searchProps.sliderState === 2) {
      getMiddlePhrase()
    } else {
      getRandomPhrase()
    }
    console.log(searchAppBarTerm, searchProps.searchTerm)
    setSearchAppBarTerm('')
  }

  function handleSearchBarClick() {
    setSearchBarClicked(true);
  }

  return (
    <>
      <Button
        sx={{
          background: 'rgb(240,248,255)',
          width: { xs: '87px', sm: '90px', md: '110px' },
          height: { xs: '30px', sm: '30px', md: '40px' },
          fontSize: '13px',
          borderRadius: '18px',
          marginRight: '14px',
          border: 'none',
          color: '#1976d2',
        }}
        type="submit"
        variant="contained"
        onClick={handleSpin}
      >
        Spin <ShuffleIcon style={{ fontSize: '14px' }} />
      </Button>
      <div id="search-bar">

        <input
          id="search-input"
          type="text"
          placeholder="Search"
          value={searchBarClicked ? searchAppBarTerm : searchProps.searchTerm}
          onClick={handleSearchBarClick}
          onChange={(event) => setSearchAppBarTerm(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button id="search-btn" onClick={handleClick}> <SearchIcon class='search-icon' /></button>
      </div>
    </>
  )
}

export default SearchAppBar