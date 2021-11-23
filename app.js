
var generateEquation = function () {
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var answer = x + y;
  $('#equationBox').empty();
  $('#equationBox').append('<p>' + x + ' + ' + y + '</p>');
  return answer;
}

$(document).ready(function () {

  var ans = generateEquation();

  $('#answerBox').keydown(function () {

    $('#answerBox').keyup(function () {
      if ($(this).val() == ans) {
        console.log('correct');
        ($(this).val(''));
        ans = generateEquation();
    }
    });

  });

});






