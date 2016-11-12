$(document).ready(function(){

  $('.mathOp').on('click', function(){
    event.preventDefault();
    var mathData = {
       x: Number($('#num1').val()),
       y: Number($('#num2').val()),
       type: $(this).attr('id')
     };

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
  });

  $('.clear').on('click', function(){
    $("input[type=number], textarea").val("");
    $('span').text('');
  });

function appendDom() {
  $.ajax({
    type: 'GET',
    url: '/result',
    success: function(result){
      console.log('answer success');
      $('span').text(result.a);
    },
    error: function(error){
      console.log('did not get result ', error);
    }
  });
}
  // $.ajax({
  //   type: 'GET',
  //   url: '/hello',
  //   success: function(data){
  //     $('h1').text(data);
  //   },
  //   error: function(error){
  //     console.log('The "/hello" ajax get request failed with error: ', error);
  //   }
  // });
  //
  // getParts();
  //
  // function getParts(){
  //   $.ajax({
  //     type: 'GET',
  //     url: '/parts',
  //     success: function(partsData){
  //       displayParts(partsData);
  //     },
  //     error: function(error){
  //       console.log('The "/parts" ajax get request failed with error: ', error);
  //     }
  //   });
  //   getRocketPossibleCount();
  // }
  //
  // function displayParts(partThings){
  //   $('tbody').empty();
  //   for(var i = 0; i < partThings.length; i++){
  //     var newRow = $('<tr>');
  //     newRow.data('partId', partThings[i].id);
  //     newRow.append('<td>' + partThings[i].name + '</td>');
  //     newRow.append('<td>' + partThings[i].needed + '</td>');
  //     newRow.append('<td>' + partThings[i].inStock + '</td>');
  //     $('tbody').append(newRow);
  //   }
  // }
  //
  // // New part
  // $('#newPartInfo').on('submit', function(event) {
  //   event.preventDefault();
  //   var newPartObject = {};
  //   var fields = $('#newPartInfo').serializeArray();
  //   fields.forEach(function(element, index, array) {
  //     newPartObject[element.name] = element.value;
  //   });
  //   $('#newPartInfo').find('input[type=text]').val('');
  //   $('#newPartInfo').find('input[type=number]').val('');
  //
  //   saveNewPart(newPartObject);
  // });
  //

  // }
  //
  // // Calculate number of rockets you can build
  // function getRocketPossibleCount(){
  //   $.ajax({
  //     type: 'GET',
  //     url: 'parts/rocketCount',
  //     success: function(data){
  //       console.log(data);
  //       $('#numberOfSpaceships').text(data.count);
  //     },
  //     error: function(error){
  //       console.log('The "/rocketCount" ajax get request failed with error: ', error);
  //     }
  //   });
  // }

});
