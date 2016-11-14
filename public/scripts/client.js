var mathData = {};
$(document).ready(function(){
  clr(); //empty mathData, put '0' in display

  //Number-key inputs
  $('.numIn').on('click', function(){
     numIn($(this).text());
  });

  //Operator inputs
  $('.mathOp').on('click', function(){
    var op = $(this).attr('id');
    if(op == 'flip') {
      flip();
    } else {
      type(op);
    }
  });

  //Clear or '='
  $('.resolve').on('click', function(){
    var eq = $(this).attr('id');
    if(eq == 'solve') {
      solve();
    } else {  //assumes 'clr' was pressed
      clr();
    }
  });
});

function appendDom() {
  $.ajax({
    type: 'GET',
    url: '/result',
    success: function(result){
      //display value of answer section of object
      $('#outPut').text(result.ans);
    },
    error: function(error){
      console.log('did not get result ', error);
    }
  });
}

function postData() {
  console.log(mathData);
  $.ajax({
    type: 'POST',
    url: '/mathData',
    data: mathData,
    success: function(response){
      console.log(response);
      appendDom();
    },
    error: function(error){
      console.log('mathData  ', error);
    }
  });
}

function solve() {
  mathData.y = Number($('#outPut').text());
  postData();
}

function type(op) {
  mathData.type = op;
  console.log(mathData.type);
  mathData.x = Number($('#outPut').text());
  if(mathData.type == 'sqrt') {
    solve();
  }
}
//flip sign of current input. Executed on clent side for simplicity
function flip() {
  var neg = -1 * Number($('#outPut').text());
  $('#outPut').text(neg);
}
//resets DOM
function clr() {
  $('#outPut').text('0');
  mathData = {};
}

function numIn(val) {
  console.log(mathData.type);
  var out = $('#outPut').text(); //visible on calc screen
  //remove previous number or default zero before appending
  if(out == '0' || mathData.x == out) {
    $('#outPut').text(null);
  }
  //dont allow multiple decimal points
  if(!(out.includes('.') && val == '.')) {
    $('#outPut').append(val);
  }

}
