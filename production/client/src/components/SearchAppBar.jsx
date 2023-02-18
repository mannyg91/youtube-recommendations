import React from 'react'
import SearchIcon from '@mui/icons-material/SearchOutlined';
import { SearchContext } from '../hooks/SearchContext';

const SearchAppBar = () => {

  const { ...searchProps } = React.useContext(SearchContext);

  //create state for search term
  const [searchAppBarTerm, setSearchAppBarTerm] = React.useState('')

  function handleClick() {
    searchProps.setSearchTerm(searchAppBarTerm)
  }

  return (
    <div id="search-bar">
      <input id="search-input" onChange={(event) => setSearchAppBarTerm(event.target.value)} type="text" placeholder="Search" />
      <button id="search-btn" onClick={handleClick}> <SearchIcon class='search-icon'/></button>
    </div>
  )
}

export default SearchAppBar