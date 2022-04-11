import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowLeftCircleFill, BsArrowLeftCircle} from "react-icons/bs";

const Country = ({countries, name, theme}) => {
  const cIndex = countries.findIndex(obj => obj.name === name);
  return (
    <div className={`country ${theme === 'dark' && 'dark'}`}>
      <Link to='/' className='backLink'>
        <div className="country__back">
        <BsFillArrowLeftCircleFill className={`arrowBack ${theme === 'dark' && 'filled'}`}/>
        </div>
      </Link>

      <div className="country__content">
        <div className="country__contentPicture">
          <img src={`${countries[cIndex].flags.svg}`} alt="" className="country__contentPictureItem" />
        </div>

        <div className="country__contentItems">
          <div className={`country__contentText ${theme === 'dark' && 'filled'}`}>
            <h3 className="country__contentTextHeader">{countries[cIndex].name}</h3>
            <div className="country__contentInfo">
              <div className="country__contentInfoFirst">
                <h3 className="country__contentInfoHeader"><b>Native Name: </b>{countries[cIndex].nativeName}</h3>
                <h3 className="country__contentInfoHeader"><b>Population: </b>{countries[cIndex].population.toLocaleString('en-US')}</h3>
                <h3 className="country__contentInfoHeader"><b>Region: </b>{countries[cIndex].region}</h3>
                <h3 className="country__contentInfoHeader"><b>Sub Region: </b>{countries[cIndex].subregion}</h3>
                <h3 className="country__contentInfoHeader"><b>Capital: </b>{countries[cIndex].capital}</h3>
              </div>
              <div className="country__contentInfoSecond">
                <h3 className="country__contentInfoHeader"><b>Top Level Domain: </b>{countries[cIndex].topLevelDomain[0]}</h3>
                <h3 className="country__contentInfoHeader"><b>Currencies: </b>{countries[cIndex].currencies[0].code}</h3>
                <h3 className="country__contentInfoHeader"><b>Languages: </b>{countries[cIndex].languages.map((language) => {
                  return <span key={language.name}>{language.name} </span>
                })}</h3>
              </div>
            </div>
          </div>
          {console.log(countries[cIndex].borders)}
          <div className="country__contentBorder">
            <h3 className="country__contentBorderHeader">Border Countries:</h3>
            <div className="country__contentBorderItems">
              {countries[cIndex].borders.map((border) => {
                return  <div className={`country__contentBorderItemsBox ${theme === 'dark' && 'filledBlack'}`}>
                          <h3 className="country__contentBorderItemsBoxHeader" key={border}>{border}</h3>
                        </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country