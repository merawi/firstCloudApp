//Load Dependencies

var express = require('express');

var app  = express();

app.get('/', function(req,res,next){

	res.send('hello world , wwelcome to my first cloud app');
});

app.listen(8080, function(){
	console.log('server is listening at port: 8080');
});
