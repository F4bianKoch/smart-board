import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ClockComp from './components/clock';
import DateComp from './components/date';


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

  return (
    <div className='App'>
      {
        isActive === false ? 
          <a onClick={() => {setIsActive(true);}}>
            <div className='Screensaver'>
              <ClockComp today={today} timeInfo={timeInfo}/>
              <DateComp today={today} timeInfo={timeInfo}/>
            </div>
          </a>
        :
        <div className='Home'>
          <p>Home</p>
        </div>
      }
    </div>
  );
}

export default App;
