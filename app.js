
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

    $('#answerBox').one('keydown', function () {

      var count = 10;
      var timer = setInterval(function () {
        count--;
        $('#counterBox').html(count);
        if (count <= 0) {
          clearInterval(timer);
          $('#counterBox').html('10');
          countdown();
        }
      }, 1000);

      $('#answerBox').keyup(function () {
        if ($(this).val() == ans) {
          ($(this).val(''));
          ans = generateEquation();
          if (count > 0) {
            count++;
            $('#counterBox').html(count);
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






