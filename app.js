var express = require('express'),
    path = require('path');

var app = express();

app.set('port', process.env.PORT || 3001);
app.use(express.static(path.join(__dirname, 'www_bg_new')));
//app.use(express.static(path.join(__dirname, 'www')));

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});
