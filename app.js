
var operator = ['+'];

var generateEquation = function () {

  var rangeNum = Number($('#rangeBar').val());

  var getEquation = function () {
    var x = Math.floor((Math.random() * rangeNum) + 1);
    var y = Math.floor((Math.random() * rangeNum) + 1);
    var i = Math.floor(Math.random() * operator.length);
    equation = x + ' ' + operator[i] + ' ' + y;
    answer = eval(equation);
  }

  if (operator.length > 0) {
    answer = getEquation();
    while (answer < 0 || answer % 1 != 0) {
      getEquation();
      $('#equationBox').empty();
      $('#equationBox').append('<p>' + equation + '</p>');
    }
    return answer;
  }
}

var play = function () {

  var answer;
  var equation;

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

var checkboxes = function () {

  var index;

  $('#add').change(function () {
    if (this.checked) {
      if (operator.indexOf('+') == -1) {
        operator.push('+');
      }
    }
    else if (!this.checked) {
      index = operator.indexOf('+');
      operator.splice(index, 1);
    }
  })

  $('#minus').change(function () {
    if (this.checked) {
      if (operator.indexOf('-') == -1) {
        operator.push('-');
      }
    }
    else if (!this.checked) {
      index = operator.indexOf('-');
      operator.splice(index, 1);
    }
  })

  $('#multiply').change(function () {
    if (this.checked) {
      if (operator.indexOf('*') == -1) {
        operator.push('*');
      }
    }
    else if (!this.checked) {
      index = operator.indexOf('*');
      operator.splice(index, 1);
    }
  })

  $('#divide').change(function () {
    if (this.checked) {
      if (operator.indexOf('/') == -1) {
        operator.push('/');
      }
    }
    else if (!this.checked) {
      index = operator.indexOf('/');
      operator.splice(index, 1);
    }
  })

}

$(document).ready(function () {

  $('#add').attr('checked', true);
  play();

  checkboxes();

  $('#rangeBar').on('change', function () {
    $('#rangeNumber').html(this.value);
  });

});





