//Load Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var models = require('./models');


//Initialize
var app  = express();

//MiddeWare
app.use(bodyParser.json());

//

app.listen(config.PORT, function(err){
    if(err) console.log('Error starting server');
    console.log(`listening to port: ${config.PORT}`);
});