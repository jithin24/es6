const express = require('express');
const routes = require('./api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/ninjaTut');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());

//Setup the routes for handling the Requests
app.use('/api', routes);

//Error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({
        error: err.message
    });
});

//setup Listener
app.listen(process.env.PORT || 4000, function() {
    console.log("Ready to listen for Requests");
});