function addContent(){
  const showcase = document.getElementById('showcase');

  return data.map(data => {
    const render =
    `<div class='box'>
      <a target='_blank' href='${data.url}'>
        <img alt='JS30' src='${data.img}'>
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
  }
];
