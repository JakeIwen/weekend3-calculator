var express = require("express");
var app = express();
var index = require('./routes/index');
var calc = require('./modules/mathOps');
var mathData = {};
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/mathData', function(req, res) {
  mathData = req.body;
  //create a string to evaluate based on operation type
  calcString = 'calc.' + mathData.type + '(mathData)';
  //add answer to object
  mathData.ans = eval(calcString);
  console.log(calcString);
  console.log('mathdata: ', mathData);

  res.sendStatus(201);
});

app.get('/result', function(req, res) {
  //send object with answer to client
  res.send(mathData);
});

app.use(express.static('./public/scripts'));

app.listen(port);
app.get('/', index);
console.log("Listening on port: ", port);
