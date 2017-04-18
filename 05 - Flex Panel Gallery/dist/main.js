"use strict";

var panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach(function (panel) {
  return panel.addEventListener('click', toggleOpen);
});
panels.forEach(function (panel) {
  return panel.addEventListener('transitionend', toggleActive);
});

function randomPic() {
  panels.map(function (p, i) {
    p.style = "background-image: url(https://source.unsplash.com/category/nature?sig=" + i + "/1200x1200)";
  });
}

window.onload = randomPic;