const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/static`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

let root_path = path.resolve(__dirname, 'static');

app.use(express.static(root_path));

const locationRouter = require('./router/location');
const menufactureRoutes = require('./router/menufacture');

//use router
app.use('/location', locationRouter);
app.use('/menufacture', menufactureRoutes);

//start the Express server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});