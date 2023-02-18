import React from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined';

const SearchAppBar = () => {
  return (
    <form id="search-bar">
      <input id="search-input" type="text" placeholder="Search" />
      <button id="search-btn" type="submit"> <SearchIcon class='search-icon'/></button>
    </form>
  )
}

export default SearchAppBar