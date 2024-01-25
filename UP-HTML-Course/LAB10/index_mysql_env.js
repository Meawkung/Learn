const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname));

const locationRoutes = require('./router/location');
const  menufacetureRoutes = require('./router/menufaceture');
const iotDataRoutes = require('./router/iotData');

app.use('/location',locationRoutes);
app.use('/menufaceture',menufacetureRoutes);
app.use('/iotData',iotDataRoutes);