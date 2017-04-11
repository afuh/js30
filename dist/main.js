"use strict";

var data = [{
  title: "JavaScript Drum Kit",
  url: "01 - JavaScript Drum Kit/index.html",
  img: "01 - JavaScript Drum Kit/image/01_port.png"
}, {
  title: "JS and CSS Clock",
  url: "02 - JS and CSS Clock/index.html",
  img: "02 - JS and CSS Clock/image/02_port.png"
}];

function addContent() {
  var showcase = document.getElementById('showcase');

  return data.map(function (data) {
    var box = document.createElement("div");
    var link = document.createElement("a");
    var img = document.createElement("img");
    var span = document.createElement("span");

    box.appendChild(link);
    link.appendChild(img);
    link.appendChild(span);
    showcase.appendChild(box);

    box.className = "box";
    link.target = "_blank";
    img.alt = "JS30";
    span.className = "title";

    span.innerHTML = data.title;
    link.href = data.url;
    img.src = data.img;
  });
}

window.onload = addContent;