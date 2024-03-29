import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ClockComp from './components/clock';
import DateComp from './components/date';
import Navbar from './components/navbar';
import Topbar from './components/topbar';
import WidgetGrid from './components/widgetGrid';
import './themes.css';
import './App.css';


function App() {
  const [today, setToday] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [timeInfo, setTimeInfo] = useState({});

  useEffect(() => {
    axios.get('/api/timezone').then((response) => setTimeInfo(response.data))
      .catch((error) => {
        setTimeInfo(1);
      });

    let idleTimeout;
    const resetIdleTimeout = () => {
      if (idleTimeout) {
        clearTimeout(idleTimeout);
      }
      idleTimeout = setTimeout(() => {
        setIsActive(false);
        clearTimeout(idleTimeout);
      }, 60000);
    };
    resetIdleTimeout();

    ["click", "touchstart", "mousemove"].forEach((evt) =>
    document.addEventListener(evt, resetIdleTimeout, false));

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
        <div className="Screensaver">
          {
            timeInfo === 1 ?
                <h1>Database kann nicht erreicht werden!</h1>
            :
              <a className='mainLink' onClick={() => {setIsActive(true)}}>
                <div className='Screensaver'>
                    <ClockComp today={today} timeInfo={timeInfo} page={0}/>
                    <DateComp today={today} timeInfo={timeInfo} page={0}/>
                </div>
              </a>
          }
        </div>
        :
        <React.Fragment>
          <div id='Home'>
            <Navbar setIsActive={setIsActive}/>
            <div className="main-part">
              <Topbar className="time" today={today} timeInfo={timeInfo} page={1}/>
              <WidgetGrid />
            </div>
          </div>
          <div id="Apps"></div>
        </React.Fragment>
      }
    </div>
  );
}

export default App;
