var express = require('express');
var app = express();

app.get('/', function(req, res) {
    
    res.send('Hello World!');
});

app.listen(8080, function() {
    
    console.log('hello world sent to port 8080');
});