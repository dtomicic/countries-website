import React, { useState } from 'react'
import Header from './components/Header';
import './assets/main.css';
import Search from './components/Search';


function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if(theme === 'light') {
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  return (
    <div className="App">
      <Header onThemeChange={changeTheme} theme={theme} />
      <div className={`bodyElements ${theme === 'dark' && 'dark'}`}>
        <div className="bodyElementsSearch">
          <Search theme={theme} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
