"use strict";

var secondHand = document.querySelector(".second-hand");
var minuteHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setDate() {
  var now = new Date();

  var second = now.getSeconds();
  var secondDegree = second / 60 * 360 + 90;

  var minute = now.getMinutes();
  var minuteDegree = minute / 60 * 360 + 90;

  var hour = now.getHours();
  var hourDegree = hour / 12 * 360 + 90;

  secondHand.style.transform = "rotate(" + secondDegree + "deg)";
  minuteHand.style.transform = "rotate(" + minuteDegree + "deg)";
  hourHand.style.transform = "rotate(" + hourDegree + "deg)";

  //fix transition bug
  if (secondDegree === 90) {
    secondHand.style.transition = "all 0s";
  } else {
    secondHand.style.transition = "all 0.5s";
  }

  if (minuteDegree === 90) {
    minuteHand.style.transition = "all 0s";
  } else {
    minuteHand.style.transition = "all 0.5s";
  }
}

setInterval(setDate, 1000);