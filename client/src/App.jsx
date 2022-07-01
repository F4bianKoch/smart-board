import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './themes.css';
import './App.css';
import ClockComp from './components/clock';
import DateComp from './components/date';
import Navbar from './components/navbar';
import Topbar from './components/topbar';


function App() {
  const [today, setToday] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [timeInfo, setTimeInfo] = useState({});

  useEffect(() => {
    axios.get('/api/timezone').then((response) => setTimeInfo(response.data));
		setInterval(() => {
			setToday(new Date());
		}, 30);
	}, []);

  const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  return (
    <div className='App'>
      {
        isActive === false ? 
          <a className='mainLink' onClick={() => {setIsActive(true)}}>
            <div className='Screensaver'>
              <ClockComp today={today} timeInfo={timeInfo} page={0}/>
              <DateComp today={today} timeInfo={timeInfo} page={0}/>
            </div>
          </a>
        :
        <div className='Home'>
          <Navbar setIsActive={setIsActive}/>
          <div className="main-part">
            <Topbar className="time" today={today} timeInfo={timeInfo} page={1}/>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
