'use strict';
var express = require('express');
var moment = require('moment');
moment().format();
var app = express();

app.get('/:time', function(req, res) {
    
    let time = moment(req.params.time, ['DD MMMM YYYY', 'MMMM DD YYYY', 'X']);
    
    if (time.isValid()) {
        
        res.json({
            'unix': time.format('X'),
            'natural': time.format('MMMM DD, YYYY')
        });
    } else {
        
        res.json({
            'unix': null,
            'natural': null
        });
    }
});

app.listen(8080, function() {
    
    console.log('Listening on port 8080...');
});