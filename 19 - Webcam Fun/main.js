const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const click = document.querySelector('.take-photo')


function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play()
    })
    .catch(err => {
      console.error("T_T", err.name)
    });
}

function paintToCanvas(){
  //show photo button
  click.style = "opacity: 1"

  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)

    //take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height)

    //mess with them
    // pixels = redEffect(pixels);
    pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.85;

    //put them back
    ctx.putImageData(pixels, 0, 0)
  }, 60)
}

function takePhoto(){
  //sound
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome" />`;
  strip.insertBefore(link, strip.firstChild)
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+= 4 ) {
    pixels.data[i + 0] =  pixels.data[i + 0] + 100 //R
    pixels.data[i + 1] =  pixels.data[i + 1] - 50  //G
    pixels.data[i + 2] =  pixels.data[i + 2] * 0.5 //R
  }
  return pixels;
}

function rgbSplit(pixels){
  for (let i = 0; i < pixels.data.length; i+= 4 ) {
    pixels.data[i - 150] =  pixels.data[i + 0]  //R
    pixels.data[i + 500] =  pixels.data[i + 1]  //G
    pixels.data[i - 500] =  pixels.data[i + 2]  //R
  }
  return pixels;
}

getVideo()
video.addEventListener('canplay', paintToCanvas);
click.addEventListener('click', takePhoto)
