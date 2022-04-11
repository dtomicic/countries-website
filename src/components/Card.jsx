import React from 'react'

const Card = ({theme, country}) => {
    return (
    <div className={`card ${theme === 'dark' && 'lightDark'}`}>
        <div className="card__picture">
            <img src={country.flags.svg} alt="Picture of a flag" className='card__pictureItem'/>
        </div>
        <div className="card__text">
            <h3 className="card__textHeader">{country.name}</h3>
            <h3 className="card__textSubHeader"><b>Population: </b>{((country.population).toLocaleString('en-US'))}</h3>
            <h3 className="card__textSubHeader"><b>Region: </b>{country.region}</h3>
            <h3 className="card__textSubHeader"><b>Capital: </b>{country.capital}</h3>
        </div>
    </div>
  )
}

export default Card