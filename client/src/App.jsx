import React, { useState, useEffect } from 'react';
import './App.css';
import ClockComp from './components/clock';
import DateComp from './components/date';


function App() {
  const [today, setToday] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
		setInterval(() => {
			setToday(new Date());
		}, 30);
	}, []);

  const isIdle = () => {

  }

  return (
    <div className='App'>
      {
        isActive === false ? 
          <a onClick={() => {setIsActive(true);}}>
            <div className='Screensaver'>
              <ClockComp today={today}/>
              <DateComp today={today}/>
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
