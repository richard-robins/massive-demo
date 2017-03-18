var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');

var app = express();

var massiveServer = massive.connectSync({
  connectionString: "postgres://@localhost/massive-demo-01"
});

// connectionString that requires authentication
// connectionString: "postgres://postgres:@localhost/massive-demo-01"
// connectionString: "postgres://postgres:password@localhost/massive-demo-01"
// connectionString: "postgres://username:password@localhost/massive-demo-01"

app.use(bodyParser.json());

app.set('db', massiveServer);

var db = app.get('db');
//console.log(db);
var port = 3000;

app.get('/incidents', function(req, res) {
  //console.log('GET sighting');
  db.get_all_incidents(function(err, incidents){
    res.send(incidents);
    console.log(incidents);
  });

});

app.post('/incidents', function(req, res) {
  console.log('POST sighting');
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
