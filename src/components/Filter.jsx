import React from 'react'

const Filter = ({theme}) => {
  return (
    <div className='filter'>
        <select className={`filterInput ${theme === 'dark' && 'lightDark'}`}>
            <option value="" disabled selected>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter