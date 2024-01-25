const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

app.use(express.static('.'))

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json 

app.get('/time', (req, res) => {
    dt = new Date();
    h = dt.getHours();
    m = dt.getMinutes();
    s = dt.getSeconds();
    res.send(`${h}:${m}:${s}`);
})

app.get('/ex2',(req,res) => {
    res.sendFile(path.join(__dirname +'/ex2.html'))
})