var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_stuff')).listen(8080);

console.log('listening on port: 8080');