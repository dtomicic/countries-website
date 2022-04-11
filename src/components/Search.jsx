import React from 'react'

const Search = ({theme, onChangeHandler}) => {
  return (
    <div className='search'>
        <input type="search"  placeholder='Search for a country...' onChange={onChangeHandler} className={`searchInput ${theme === 'dark' && 'lightDark'}`}/>
    </div>
  )
}

export default Search