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
 
app.get('/txt/:cal', (req, res) => {
    cal = req.params['cal'].split(',')
    a = cal[0]
    b = cal[2]
    operator = cal[1]
    c = calculator(a, b, operator)
    operator = operator == 'r' ? '/' : operator
    res.render('simple', { a, b, operator, c })
});
 
calculator = (a, b, operator) => {
    a = parseFloat(a)
    b = parseFloat(b)

    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case 'r':
            return a / b
        default:
            return 'Invalid operator'
    }
}

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});