'use strict';

var msg = new SpeechSynthesisUtterance();
var voices = [];
var voicesDropdown = document.querySelector('[name="voice"]');
var options = document.querySelectorAll('[type="range"], [name="text"]');
var speakButton = document.querySelector('#speak');
var stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
  // .filter(voice => voice.lang.includes('es'))
  .map(function (voice) {
    return '<option value="' + voice.name + '">' + voice.name + ' (' + voice.lang + ')</option>';
  }).join("");
}

function setVoice() {
  var _this = this;

  msg.voice = voices.find(function (voice) {
    return voice.name === _this.value;
  });
  toggle();
}

function toggle() {
  var startOver = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  speechSynthesis.cancel();
  startOver && speechSynthesis.speak(msg);
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(function (option) {
  return option.addEventListener('change', setOption);
});
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', toggle.bind(null, false));