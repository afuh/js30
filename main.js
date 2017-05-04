function addContent(){
  const showcase = document.getElementById('showcase');

  return data.map(data => {
    const render =
    `<div class='box'>
      <a target='_blank' href='${data.url}'>
        <img alt='${data.title}' src='${data.img}'>
        <div class='title-grad'>
          <span class='title'>${data.title}</span>
        </div>
      </a>
    </div>`;

    showcase.insertAdjacentHTML("beforeend", render);
    });
}

window.onload = addContent;

const data = [
  {
    title: "JavaScript Drum Kit",
    url: "01 - JavaScript Drum Kit/index.html",
    img: "01 - JavaScript Drum Kit/image/01_port.jpg"
  },
  {
    title: "JS and CSS Clock",
    url: "02 - JS and CSS Clock/index.html",
    img: "02 - JS and CSS Clock/image/02_port.jpg"
  },
  {
    title: "Update CSS Variables with JS",
    url: "03 - CSS Variables/index.html",
    img: "03 - CSS Variables/image/03_port.jpg"
  },
  {
    title: "Flex Panel Gallery",
    url: "05 - Flex Panel Gallery/index.html",
    img: "05 - Flex Panel Gallery/image/05_port.jpg"
  },
  {
    title: "Type Ahead",
    url: "06 - Type Ahead/index.html",
    img: "06 - Type Ahead/image/06_port.jpg"
  },
  {
    title: "HTML5 Canvas",
    url: "08 - Fun with HTML5 Canvas/index.html",
    img: "08 - Fun with HTML5 Canvas/image/08_port.jpg"
  },
  {
    title: "Hold Shift and Check Checkboxes",
    url: "10 - Hold Shift and Check Checkboxes/index.html",
    img: "10 - Hold Shift and Check Checkboxes/image/10_port.jpg"
  },
  {
    title: "Custom Video Player",
    url: "11 - Custom Video Player/index.html",
    img: "11 - Custom Video Player/image/11_port.jpg"
  },
  {
    title: "Key Sequence Detection",
    url: "12 - Key Sequence Detection/index.html",
    img: "12 - Key Sequence Detection/image/12_port.jpg"
  },
  {
    title: "Slide in on Scroll",
    url: "13 - Slide in on Scroll/index.html",
    img: "13 - Slide in on Scroll/image/13_port.jpg"
  },
  {
    title: "Local Storage",
    url: "15 - LocalStorage/index.html",
    img: "15 - LocalStorage/image/14_port.jpg"
  },
  {
    title: "Mouse Move Shadows",
    url: "16 - Mouse Move Shadow/index.html",
    img: "16 - Mouse Move Shadow/image/16_port.jpg"
  },
  {
    title: "Webcam Fun",
    url: "19 - Webcam Fun/index.html",
    img: "19 - Webcam Fun/image/19_port.jpg"
  },
  {
    title: "Speech Detection",
    url: "20 - Speech Detection/index.html",
    img: "20 - Speech Detection/image/20_port.jpg"
  },
  {
    title: "Follow Along Link Highlighter",
    url: "22 - Follow Along Link Highlighter/index.html",
    img: "22 - Follow Along Link Highlighter/image/22_port.jpg"
  },
  {
    title: "Speech Synthesis",
    url: "23 - Speech Synthesis/index.html",
    img: "23 - Speech Synthesis/image/23_port.jpg"
  },
  {
    title: "Sticky Nav & Parallax",
    url: "24 - Sticky Nav/index.html",
    img: "24 - Sticky Nav/image/24_port.jpg"
  },
  {
    title: "Stripe Follow Along Nav",
    url: "26 - Stripe Follow Along Nav/index.html",
    img: "26 - Stripe Follow Along Nav/image/26_port.jpg"
  },
  {
    title: "Click and Drag",
    url: "27 - Click and Drag/index.html",
    img: "27 - Click and Drag/image/27_port.jpg"
  },
  {
    title: "Video Speed Controller",
    url: "28 - Video Speed Controller/index.html",
    img: "28 - Video Speed Controller/image/28_port.jpg"
  },
  {
    title: "Countdown Timer",
    url: "29 - Countdown Timer/index.html",
    img: "29 - Countdown Timer/image/29_port.jpg"
  },
  {
    title: "Whack A Mole",
    url: "30 - Whack A Mole/index.html",
    img: "30 - Whack A Mole/image/30_port.jpg"
  }
];
