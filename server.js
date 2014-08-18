var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public')).listen(8080);

console.log('listening on port: 8080');