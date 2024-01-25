//userRoutes.js
const express = require('express');
const router = express.Router();    
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');   


require('dotenv').config();

//create a mysql connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

router.use=(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/list',(req,res) => {

    let start = parseInt(req.query.start)
    let end = parseInt(req.query.end)

    start = isNaN(start) ? 0 : start
    end = isNaN(end) ? 10 : end

    pool.query('SELECT * FROM location LIMIT ?,?', [start, end], (error, results, fields) => {
        if(error){
            console.error(error);
            res.status(500).send('Error retrieving data from database');
        }else {
            res.json(results);
        }
    })
});

router.get('/table',(req,res) => {
    res.render('iot_data/table')
})