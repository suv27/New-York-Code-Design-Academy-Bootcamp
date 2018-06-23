
setInterval(function() {
  var display = document.getElementById("display");
  var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

  var days = Math.floor((countDownDate - new Date().getTime()) / (1000 * 60 * 60 * 24));
  var hours = Math.floor(((countDownDate - new Date().getTime()) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor(((countDownDate - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor(((countDownDate - new Date().getTime()) % (1000 * 60)) / 1000);

  display.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
