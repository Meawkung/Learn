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

//Define user routes
router.get('/',(req,res)=>{
    res.send('Location route');
});

//Simple SELECT query (GET all and get json by Id)
router.get('/list',(req,res)=>{
    pool.query('SELECT * FROM location',(error,results,fields)=>{
        if(error){
            console.error(error)
            res.status(500).send('Error retrieving data from database');
        }
        else{
            res.json(results);
        }
    });
});

router.get('/json/:id',(req,res)=>{

    var sql = 'SELECT * FROM location WHERE location_id = ' + req.params['id'];
    pool.query(sql,(error,results,fields)=>{
        if(error){
            console.error(error)
            res.status(500).send('Error retrieving data from database\n' + sql);
        }
        else{
            res.json(results);
            res.end();
        }
    });
});

router.get('/:id(\\d+)',(req,res)=>{
    var sql = 'SELECT * FROM location WHERE location_id = ' + req.params['id'];
    pool.query(sql,(error,results,fields)=>{
        if(error){
            console.error(error)
            res.status(500).send('Error retrieving data from database\n' + sql);
        }if (results.length == 0){
            res.status(404).send('no location_id =' + req.params['id']);
        }else{
            //res.setHeader('Content-Type', 'text/html');
            location_id = results[0].location_id
            location_name = results[0].location_name
            res.render('location/index',{'location_id':location_id,'location_name':location_name})
        }
    });
});

router.post('/delete',(req,res)=>{

    const {location_id} = req.body;

    //SQL query to insert data into the location table
    const sql = 'DELETE FROM location WHERE location_id = (?)';

    //Execute the query with the provided data
    pool.query(sql,[location_id],(err, result) =>{
        if(err){
            return res.status(500).json({error: err.message});
        }

        //Return the ID of the inserted row
        res.json({'deleted': 'completed'});
    });
});

router.post('/update:id',(req,res)=>{
    var sql = 'SELECT * FROM location WHERE location_id = ' + req.params['id'];
    pool.query(sql,(error,results,fields)=>{
        if(error){
            console.error(error)
            res.status(500).send('Error retrieving data from database\n' + sql);
        }if (results.length == 0){
            res.status(404).send('no location_id =' + req.params['id']);
        }else{
            //res.setHeader('Content-Type', 'text/html');
            location_id = results[0].location_id
            location_name = results[0].location_name
            res.render('location/update',{'location_id':location_id,'location_name':location_name})
        }
    });
});

router.post('/update',(req,res)=>{

    const {location_id,location_name} = req.body;

    //SQL query to insert data into the location table
    const sql = 'UPDATE location SET location_name = ? WHERE location_id = ?';

    //Execute the query with the provided data
    pool.query(sql,[location_name,location_id],(err, result) =>{
        if(err){
            return res.status(500).json({error: err.message});
        }
        res.redirect(location_id);
    });
});

router.get('/add',(req,res)=>{
    res.render('location/add');
    //res.end();
});

router.post('/add',(req,res)=>{

    const {location_name} = req.body;

    //SQL query to insert data into the location table
    const sql = 'INSERT INTO location (location_name) VALUES (?)';

    //Execute the query with the provided data
    pool.query(sql,[location_name],(err, result) =>{
        if(err){
            return res.status(500).json({error: err.message});
        }

        //Return the ID of the inserted row
        res.redirect('/location' + result.insertId);
    });
});

module.exports = router;    