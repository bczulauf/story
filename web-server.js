var express = require("express"),
  app     = express(),
  port    = parseInt(process.env.PORT, 10) || 8010;

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
});

var components = ["button", "counter"];

var triggers = ["User Click", "Page Load"];

var actions = [];

app.get('/component', function (req, res) {
	res.send(components);
});

app.get('/trigger', function (req, res) {
	res.send(triggers);
});

app.listen(port);
console.log('Now serving the app at http://localhost:' + port + '/');