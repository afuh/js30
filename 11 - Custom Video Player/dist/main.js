"use strict";function togglePlay(){video.paused?video.play():video.pause()}function updateButton(){var e=this.paused?"►":"❚ ❚";toggle.innerHTML=e}function skip(){video.currentTime+=parseFloat(this.dataset.skip)}function handleRangeUpdate(){video[this.name]=this.value}function handleProgress(){var e=video.currentTime/video.duration*100;progressBar.style.flexBasis=e+"%"}function scrub(e){var n=e.offsetX/progress.offsetWidth*video.duration;video.currentTime=n}function enterFullScreen(){player.requestFullscreen?player.requestFullscreen():player.mozRequestFullScreen?player.mozRequestFullScreen():player.webkitRequestFullscreen&&player.webkitRequestFullscreen()}function exitFullScreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function isFullScreen(){return document.fullScreenElement&&null!==document.fullScreenElement||document.mozFullScreen||document.webkitIsFullScreen}function toggleFullScreen(){isFullScreen()?exitFullScreen():enterFullScreen(document.documentElement)}var player=document.querySelector(".player"),video=player.querySelector(".viewer"),progress=player.querySelector(".progress"),progressBar=player.querySelector(".progress__filled"),toggle=player.querySelector(".toggle"),skipButtons=player.querySelectorAll("[data-skip]"),ranges=player.querySelectorAll(".player__slider"),fullscreen=player.querySelector(".fullscreen");video.addEventListener("click",togglePlay),video.addEventListener("play",updateButton),video.addEventListener("pause",updateButton),video.addEventListener("timeupdate",handleProgress),toggle.addEventListener("click",togglePlay),skipButtons.forEach(function(e){return e.addEventListener("click",skip)}),ranges.forEach(function(e){return e.addEventListener("change",handleRangeUpdate)}),ranges.forEach(function(e){return e.addEventListener("mousemove",handleRangeUpdate)});var mousedown=!1;progress.addEventListener("click",scrub),progress.addEventListener("mousemove",function(e){return mousedown&&scrub(e)}),progress.addEventListener("mousedown",function(){return mousedown=!0}),progress.addEventListener("mouseup",function(){return mousedown=!1}),fullscreen.addEventListener("click",toggleFullScreen);