const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');
 
const app = express();
const port = 8000;
 
app.set('views', `${__dirname}/static`);
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
let root_path = path.resolve(__dirname, 'static');
 
app.use(express.static(root_path));
 
app.get('/', (req, res) => {
    a = 2
    b = 3
    operator = '+'
    c = a + b
    res.render('simple', { a, b, operator, c })
});
 
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});