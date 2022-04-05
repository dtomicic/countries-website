import React, { useState } from 'react'

const Search = ({theme}) => {
    const [inputValue, setInputValue] = useState('');

    const searchCountry = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div className='search'>
        <input type="text"  placeholder='Search for a country...' value={inputValue} onChange={searchCountry} className={`searchInput ${theme === 'dark' && 'lightDark'}`}/>
    </div>
  )
}

export default Search