const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname));

//Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iot',
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0
});

//Simple SELECT query
app.get('/locations',(req,res) => {
    pool.query('SELECT * FROM location',(error, result, fields) => {
        if(error){
            console.error(error);
            res.status(500).send('Error retrieving data from the database');
        }else {
            res.json(result);
        }
    });
});

//Simple INSERT query
app.post('/locations',(req,res) => {
    const { location_name } = req.body;

    //SQL query to insert data into the location table
    const sql = 'INSERT INTO location (location_name) VALUES (?)';

    //Execute the query with the provided data
    pool.query(sql, [location_name], (err, result) => {
        if(err){
            return res.status(500).json({ error:err.message  });
        }

        //Return the ID of the inserted row
        // res.json({  id: result.insertID  });
        res.setHeader('Content-Type','application/json')
        res.json({id:result.insertId})
    });
});

//Start the Express server
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
})

app.get('/locations/json/:id',(req,res) => {
    var sql = 'SELECT * FROM location WHERE location_id = '+req.params['id']
    pool.query(sql,(error, result, fields) => {
        if(error){
            console.error(error);
            res.status(500).send('Error retrieving data from the database\n'+sql);
        }else{
            res.json(result)
            res.end()
        }
    });
});