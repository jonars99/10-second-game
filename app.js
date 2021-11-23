
var generateEquation = function () {
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var answer = x + y;
  $('#equationBox').append('<p>' + x + ' + ' + y + '</p>');
  return answer;
}

$(document).ready(function () {

  var ans = generateEquation();
  console.log(ans);

  $('#answerBox').keydown(function () {

    $('#answerBox').keyup(function () {
      if ($(this).val() == ans) {
      console.log('correct');
    }
    });

  });

});






