
var generateEquation = function () {
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var operonArr = ['+', '-', '*', '/'];
  var i = Math.floor(Math.random() *4);
  var equation = x + ' ' + operonArr[i] + ' ' + y;
  var answer = eval(equation);
  console.log(equation + ' is ' + answer);
  $('#equationBox').empty();
  $('#equationBox').append('<p>' + equation + '</p>');
  return answer;
}

var play = function () {

  var ans = generateEquation();
  var score = 0;
  var highScore = 0;

  var countdown = function () {

    score = 0;
    $('#counterBox').html('10');
    $('#currentScore').html(score);

    $('#answerBox').one('keydown', function () {

      var seconds = 10;
      var timer = setInterval(function () {
        seconds--;
        $('#counterBox').html(seconds);
        if (seconds <= 0) {
          if (score > highScore) {
            highScore = score;
            $('#highScore').html(highScore);
          }
          clearInterval(timer);
          countdown();
        }
      }, 1000);

      $('#answerBox').keyup(function () {
        if ($(this).val() == ans) {
          score++;
          $('#currentScore').html(score);
          ($(this).val(''));
          ans = generateEquation();
          if (seconds > 0) {
            seconds++;
            $('#counterBox').html(seconds);
          }
        }
      });
    });
  };

  countdown();

};

$(document).ready(function () {

  play();

});






