import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/timezone', (req, res) => {
    res.json({
        "timeDisplay": "de-DE",
        "timezone": "Europe/Berlin"
    });
});

app.get('/api/weather', (req, res) => {
    axios.get('https://api.weatherapi.com/v1/forecast.json?key=fad39e5cfa4e4247bfb161147221603&lang=de&q=Erding&days=2')
    .then((response) => {
        const weatherData = response.data;

        if (weatherData != undefined) {
            res.json({
                "temp": weatherData.current.temp_c,
                "img": weatherData.current.condition.icon,
                "text": weatherData.current.condition.text,
                "hm": weatherData.current.humidity,
                "location": weatherData.location.name + ", " + weatherData.location.region,
            })
        }else {
            res.json({
                "temp": "N/A",
                "img": "N/A",
                "text": "N/A",
                "hm": "N/A",
                "location": "N/A",
                "weatherData": "N/A"
            })
        }
    });
})

app.listen(port, () => {
    console.log(`Server running at 127.0.0.0:${port}`);
})