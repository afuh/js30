'use strict';

var triggers = document.querySelectorAll('a');
var highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  var linkCoords = this.getBoundingClientRect();
  var coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  };

  highlight.style.width = coords.width + 'px';
  highlight.style.height = coords.height + 'px';
  highlight.style.transform = 'translate(' + coords.left + 'px, ' + coords.top + 'px)';
}

triggers.forEach(function (a) {
  return a.addEventListener('mouseenter', highlightLink);
});