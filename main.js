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
  }
];

function addContent(){
  const showcase = document.getElementById('showcase');

  return data.map((data, i) => {
    let render = "";
    render += "<div class='box'>";
    render += `<a target='_blank' href='${data.url}'>`;
    render += `<img alt='JS30' src='${data.img}'>`;
    render += "<div class='title-grad'>";
    render += `<span class='title'>${data.title}</span>`;
    render += "</div>";
    render += "</a>";
    render += "</div>";

    showcase.insertAdjacentHTML("beforeend", render);

    // const box = document.createElement("div");
    // const link = document.createElement("a");
    // const img = document.createElement("img");
    // const span = document.createElement("span");
    //
    // box.appendChild(link);
    // link.appendChild(img);
    // link.appendChild(span);
    // showcase.appendChild(box);
    //
    // box.className = "box";
    // link.target = "_blank";
    // img.alt = "JS30";
    // span.className = "title";
    //
    // span.innerHTML = data.title;
    // link.href = data.url;
    // img.src = data.img;
    });
}

window.onload = addContent;
