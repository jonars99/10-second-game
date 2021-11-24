
var generateEquation = function () {
  var x = Math.floor((Math.random() * 10) + 1);
  var y = Math.floor((Math.random() * 10) + 1);
  var answer = x + y;
  $('#equationBox').empty();
  $('#equationBox').append('<p>' + x + ' + ' + y + '</p>');
  return answer;
}

var play = function () {

  var ans = generateEquation();

  var countdown = function () {

    var score = 0;

    $('#answerBox').one('keydown', function () {

      var seconds = 10;
      var timer = setInterval(function () {
        seconds--;
        $('#counterBox').html(seconds);
        if (seconds <= 0) {
          clearInterval(timer);
          $('#counterBox').html('10');
          score = 0;
          $('#currentScore').html('0');
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






