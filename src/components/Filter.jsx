import React, { useState } from 'react'

const Filter = ({theme, onFilterHandler}) => {
  const [filter, setFilter] = useState('');
  return (
    <div className='filter'>
        <select className={`filterInput ${theme === 'dark' && 'lightDark'}`} defaultValue={`DEFAULT`} onChange={onFilterHandler}>
            <option value="DEFAULT" disabled>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Filter