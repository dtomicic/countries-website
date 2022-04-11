import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import './assets/main.css';
import Search from './components/Search';
import Filter from './components/Filter';
import Card from './components/Card';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Country from './components/Country';


function App() {
  const [theme, setTheme] = useState('light');
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filterField, setFilterField] = useState('');
  const [name, setName] = useState('');

  const nameSave = (e) => {
    console.log(e.currentTarget.getAttribute('data-index'));
    setName(e.currentTarget.getAttribute('data-index'));
  }

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  const onFilterChange = (e) => {
    setFilterField(e.target.value);
  }


  const changeTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  const fetchData = async() => {
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      setCountries(data);
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Header onThemeChange={changeTheme} theme={theme} />
        <Routes>
          <Route exact path='/' element= {
            <div className={`bodyElements ${theme === 'dark' && 'dark'}`}>
            <div className="bodyElementsSearch">
              <Search theme={theme} countries={countries} onChangeHandler={onSearchChange} />
              <Filter  theme={theme} onFilterHandler={onFilterChange} />
            </div>
  
            <div className="bodyElementsCards">
              {countries.filter(country => (country.name).includes(searchField) && (country.region).includes(filterField))
                .map((country) => {
                  return <Link to='/country' className='links' key={country.name} data-index={country.name}  onClick={nameSave}><Card theme={theme} country={country} key={country.name} /></Link>
              })}
            </div>
          </div>
          }></Route>
          <Route path='/country' element={<Country countries={countries} name={name} theme={theme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
