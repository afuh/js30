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
  }
];
