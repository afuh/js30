const data = [
  {
    title: "JavaScript Drum Kit",
    url: "01 - JavaScript Drum Kit/index.html",
    img: "01 - JavaScript Drum Kit/image/port.png"
  }
];

function addContent(){
  const showcase = document.getElementById('showcase');

  return data.map(data => {
    const box = document.createElement("div");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const span = document.createElement("span");

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
