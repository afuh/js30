const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50; //px

function shadow (e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  //const {offsetWidth: width, offsetHeight: height} = hero;

  let x = e.offsetX;
  let y = e.offsetY;
  //let {offsetY: y, offsetX: x} = e;

  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 15px rgba(0,0,0,0.2)`;
}

hero.addEventListener('mousemove', shadow);
