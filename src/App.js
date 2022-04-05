import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import './assets/main.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Card from './components/Card';


function App() {
  const [theme, setTheme] = useState('light');
  const [countries, setCountries] = useState([]);

  const changeTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  const fetchData = async() => {
    const res = await fetch("https://restcountries.com/v3.1/name/peru", {
      mode: 'no-cors',
      headers: {
           "Content-Type": "application/json"
      },
    });
    const data = await res.json();
    setCountries(data);
  }
  

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <div className="App">
      <Header onThemeChange={changeTheme} theme={theme} />
      <div className={`bodyElements ${theme === 'dark' && 'dark'}`}>
        <div className="bodyElementsSearch">
          <Search theme={theme} />
          <Filter  theme={theme} />
        </div>

        <div className="bodyElementsCards">
          {countries.map((country) => {
            <Card theme={theme} country={countries}/>
          })}
          {/* <Card theme={theme} /> */}
        </div>
        
      </div>
    </div>
  );
}

export default App;
