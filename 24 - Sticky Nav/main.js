const nav = document.querySelector("#main");
const backImage = document.querySelector("header");

let topOfNav = nav.offsetTop;

function fixNav(e) {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add("fixed-nav");
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
  //parallax header
  backImage.style.backgroundPosition = `0 ${0 + window.scrollY * 0.2}%`;
}

window.addEventListener("scroll", fixNav);
window.addEventListener("resize", () => topOfNav = nav.offsetTop);
