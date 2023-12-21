const express = require("express");
const app = express();
const path = require('path');

let dir = path.join(__dirname,'../LAB03 CSS')
let url = path.resolve(__dirname,'../LAB03 CSS/index.html')
let dir2 = path.join(__dirname,'../404Page')

app.use(express.static(dir)&&express.static(dir2));

const PORT = 3001;
app.listen(PORT,() => {
    console.log(`Application started and listeneing on port ${PORT}`);
});

app.get('/main',(req,res) =>{
    res.sendFile(url)
});

app.get('/test',(req,res) =>{
    res.setHeader('Content-Type','text/html')
    res.send('<h1>Test Page</h1>')
});

app.get('/404',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../404Page/404.html'))

})

app.get('*',(req, res)=>{
    // res.status(404).send('Please mercy on us, don\'t attack');
    res.redirect('/404');
});

