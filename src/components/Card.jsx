import React from 'react'
import de from '../assets/de.svg';

const Card = ({theme, countries}) => {
    console.log(countries);
    return (
    <div className={`card ${theme === 'dark' && 'lightDark'}`}>
        <div className="card__picture">
            <img src={de} alt="Picture of a flag" className='card__pictureItem'/>
        </div>
        <div className="card__text">
            <h3 className="card__textHeader">Germany</h3>
            <h3 className="card__textSubHeader"><b>Population: </b>81,770,900</h3>
            <h3 className="card__textSubHeader"><b>Region: </b>Europe</h3>
            <h3 className="card__textSubHeader"><b>Capital: </b>Berlin</h3>
        </div>
    </div>
  )
}

export default Card