console.log("Hello DO101 Apps!\n"); 

var express = require('express');
app = express();

app.get('/', function(req, res) {
    res.send('Hello New World!\n');
});

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
});

app.get('/moon', function(req, res) {
    res.send('Hello Moon!\n');
});

app.listen(8081, function() {
    console.log("Example app listening on port 8081!\n"); 
});