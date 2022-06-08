import React, { useState, useEffect } from 'react';
import './App.css';
import ClockComp from './components/clock';
import DateComp from './components/date';


function App() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
		setInterval(() => {
			console.log('watching');
			setToday(new Date());
		}, 30);
	}, []);

  return (
    <div className="App">
      <ClockComp today={today}/>
      <DateComp today={today}/>
    </div>
  );
}

export default App;
