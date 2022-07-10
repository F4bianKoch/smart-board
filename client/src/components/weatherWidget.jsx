import { useState } from 'react';
import './styles/weatherWidget.css';


const WeatherWidget = () => {
    const [temp, setTemp] = useState();
    const [img, setImg] = useState();
    const [text, setText] = useState();
    const [hm, setHm] = useState();
    const [location, setLocation] = useState();

    return (
        <div className='weather-widget'>
            <div class="weather">
            <div class="temp-display">
                <div class="current-weather">
                <img class="icon" />
                <p class="temperature"></p>
                <p class="weather-text"></p>
                </div>
            </div>
            <div class="weather-sidebar">
                <div class="humidity-wrapper">
                <span class="material-icons-outlined" id="water_drop">water_drop</span>
                <p class="humidity"></p>
                </div>
                <div class="location-wrapper">
                <span class="material-icons-outlined" id="place">place</span>
                <p class="location"></p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default WeatherWidget;