const countDate = new Date("Jan 10 2022 14:30:55").getTime();

var x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days +
    " Day:  " +
    hours +
    " Hour:  " +
    minutes +
    " Minute:  " +
    seconds +
    " Second";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's Up!";
  }
});
