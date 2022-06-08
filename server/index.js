const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.get('/api/timezone', (req, res) => {
    res.json({"timezone": "de"});
});

app.listen(port, () => {
    console.log(`Server running at 127.0.0.0:${port}`);
})