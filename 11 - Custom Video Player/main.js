// Get elements
const player = document.querySelector(".player"),
      video = player.querySelector(".viewer"),
      progress = player.querySelector(".progress"),
      progressBar = player.querySelector(".progress__filled"),
      toggle = player.querySelector(".toggle"),
      skipButtons = player.querySelectorAll("[data-skip]"),
      ranges = player.querySelectorAll(".player__slider"),
      fullscreen = player.querySelector('.fullscreen');

// Build functions
function togglePlay() {
  if (video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon;
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

//fullscreen Mambo
function enterFullScreen(){
  if (player.requestFullscreen) player.requestFullscreen();
  else if (player.mozRequestFullScreen) player.mozRequestFullScreen();
  else if (player.webkitRequestFullscreen) player.webkitRequestFullscreen();
}

function exitFullScreen(){
  if (document.exitFullscreen) document.exitFullscreen();
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
}

function isFullScreen(){
  return (document.fullScreenElement && document.fullScreenElement !== null) || document.mozFullScreen || document.webkitIsFullScreen;
}

function toggleFullScreen() {
  if (isFullScreen()) exitFullScreen();
  else enterFullScreen(document.documentElement);
}

//Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullScreen);
