var $fadeIn = $('.info');

$fadeIn.waypoint(function (direction){
  if (direction == 'down'){
    $fadeIn.addClass('js-fadeIn-animate');
  } else{
    $fadeIn.removeClass('js-fadeIn-animate');
  }
}, {offset: '70%'});


var $fadeIn2 = $('.apron');

$fadeIn2.waypoint(function (){
  $fadeIn2.addClass('js-InDown-animate');
}, {offset: '50%'});
