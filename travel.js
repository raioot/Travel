var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public')).listen(8080, function (){
	console.log('Listening on port %d', this.address().port);
});

