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
  calcString = 'calc.' + mathData.type + '(mathData)';

  mathData.a = eval(calcString);

  console.log(calcString);
  console.log('mathdata: ', mathData);
  res.sendStatus(201);
});

app.get('/result', function(req, res) {
  console.log('res send');
  res.send(mathData);
});

app.use(express.static('./public/scripts'));

app.listen(port);
app.get('/', index);
console.log("Listening on port: ", port);




// switch (mathData.type) {
//   case 'addi':
//   //  answer.a = calc.addi(mathData)
//     //answer = addi(mathData);
//     //answer.a = Number(mathData.x) + Number(mathData.y);
//   break;
//   case 'subtr':
//     //answer = subtr(mathData);
//     answer.a = Number(mathData.x) - Number(mathData.y);
//   break;
//   case 'multi':
//     //answer = multi(mathData);
//     answer.a = Number(mathData.x) * Number(mathData.y);
//   break;
//   case 'divi':
//     //answer = divi(mathData);
//     answer.a = Number(mathData.x) / Number(mathData.y);
//   break;
//   default: answer.a = null;
// }
