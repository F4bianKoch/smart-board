import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import pg from 'pg';

const app = express();
const Client = pg.Client;
const port = process.env.PORT || 5000;

dotenv.config();
app.use(cors());

const db = new Client();
await db.connect();


app.get('/api/timezone', async (req, res) => {

    const data = await db.query("Select * from userinformation where name='timezone' or name='timeDisplay'");

    res.json({
        "timeDisplay": data.rows[1].string,
        "timezone": data.rows[0].string
    });
});

app.get('/api/weather', async (req, res) => {

    const data = await db.query("Select * from userinformation where name='weather_api_key' or name='location'");
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${data.rows[0].string}&lang=de&q=${data.rows[1].string}&days=2`; 

    axios.get(url)
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
    })
    .catch((err) => { console.log('weather api failed: ', err) });
})

app.listen(port, () => {
    console.log(`Server running at 127.0.0.0:${port}`);
})