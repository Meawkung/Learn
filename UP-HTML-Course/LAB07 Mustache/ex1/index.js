const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mustacheExpress = require('mustache-express');
const { rejects } = require('assert');
const { error } = require('console');
 
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
    const operRegex = /[\+\-\*\/r]/;
    cal = req.params['cal'].split(operRegex)

    a = cal[0]
    b = cal[1]

operator = req.params['cal'].replace(a, '').replace(b, '')
let msg = ''
var txt = ''

const promise = new Promise((resolve,reject) => {
    if (b == 0 && operator == 'r') {
        msg = 'Cannot divide by zero'
        reject(msg)
    }
    else {
        c = calculator(a, b, operator)
        operator = operator == 'r' ? '/' : operator
        msg = `${a} ${operator} ${b} = ${c}`
        resolve(msg)
    }
})

    promise.then(
        result => {
            txt = result
            console.log(txt)
            res.send(txt)
        },error => {
            txt = 'found error'
        })
    promise.catch(error => {
        txt += ', Exception: ' + error
        console.log(txt)
        res.send(txt)
    })
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