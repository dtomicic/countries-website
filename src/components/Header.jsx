import React, { useState } from 'react';
import {BsMoon} from "react-icons/bs";

const Header = ({onThemeChange, theme}) => {
  return (
    <div className={`header ${theme === 'dark' && 'lightDark'}`}>
        <h3 className="header__text">Where in the world?</h3>
        <div className="header__modeSelect" onClick={onThemeChange}>
        <BsMoon />
        <h3 className="header__modeSelectText">{theme === 'dark'? 'Light mode' : 'Dark Mode'}</h3>
        </div>
        
    </div>
  )
}

export default Header