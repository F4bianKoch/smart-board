import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './styles/weatherWidget.css';


const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState();
    const [fetchCompleted, setFetchCompleted] = useState(false);

    useEffect(() => {
        axios.get('/api/weather').then((response) => {
            if (Object.keys(response.data).length !== 0) {
                setWeatherData(response.data);
                if (Object.keys(response.data).length !== 1) {
                    setFetchCompleted(true);
                }
            }
        });
    }, []);


    return (
        <div className='weather-widget'>
            {
                fetchCompleted === false ?
                    <div className="weather">
                        <div className="temp-display">
                            <p className="temperature">N/A</p>
                        </div>
                    </div>
                :
                <div className="weather">
                <div className="temp-display">
                    <div className="current-weather">
                    <img className="icon" src={weatherData.img}/>
                    <p className="temperature">{weatherData.temp} °C</p>
                    <p className="weather-text">{weatherData.text}</p>
                    </div>
                </div>
                <div className="weather-sidebar">
                    <div className="humidity-wrapper">
                    <span className="material-icons-outlined" id="water_drop">water_drop</span>
                    <p className="humidity">{weatherData.hm} %</p>
                    </div>
                    <div className="location-wrapper">
                    <span className="material-icons-outlined" id="place">place</span>
                    <p className="location">{weatherData.location}</p>
                    </div>
                </div>
                </div>
            }
        </div>
    )
}

export default WeatherWidget;