
var generateEquation = function () {
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var answer = x + y;
  $('#equationBox').empty();
  $('#equationBox').append('<p>' + x + ' + ' + y + '</p>');
  return answer;
}

var timer = function () {
  var count = 10;
  var counter = setInterval(function () {
    count--;
    $('#counterBox').html(count);
    if (count <= 0) {
      clearInterval(counter);
    }
  }, 1000);

}

$(document).ready(function () {

  var ans = generateEquation();

  timer();

  $('#answerBox').keydown(function () {

    $('#answerBox').keyup(function () {
      if ($(this).val() == ans) {
        ($(this).val(''));
        ans = generateEquation();
    }
    });

  });

});






