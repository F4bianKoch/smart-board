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
try {
    await db.connect();
}catch (error) {
}


app.get('/api/timezone', async (req, res) => {

    const timezone = await db.query("Select * from userinformation where name='timezone'");
    const timeDisplay = await db.query("Select * from userinformation where name='timeDisplay'");
    res.json({
        "timeDisplay": timeDisplay.rows[0].string,
        "timezone": timezone.rows[0].string
    });
});


app.get('/api/weather', async (req, res) => {

    const api_key = await db.query("Select * from userinformation where name='weather_api_key'");
    const location = await db.query("Select * from userinformation where name='location'");

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key.rows[0].string}&lang=de&q=${location.rows[0].string}&days=2`; 

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
        }
    }).catch((err) => { console.log('weather api failed') });

})

app.get('/api/todo_list', async (req, res) => {

    const tasks = await db.query("Select string from userinformation");
    
    for (let x = tasks.rows.length; x > 0; x++)
        res.json({
            "tasks": tasks.rows[3].string,
        });
    });

app.listen(port, () => {
    console.log(`Server running at 127.0.0.0:${port}`);
})