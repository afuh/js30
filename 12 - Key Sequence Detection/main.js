class Chuck {
  constructor(){
    this.position = {
      y: Math.floor(Math.random() * 90),
      x: Math.floor(Math.random() * 90)
    };
    this.randomY = Math.random() >= 0.5 ? `bottom:${this.position.y}%;` : `top:${this.position.y}%;`;
    this.randomX = Math.random() >= 0.5 ? `left:${this.position.x}%;` : `right:${this.position.x}%;`;
    this.flip = Math.random() >= 0.5 ? 1 : -1;
    this.rotate = Math.floor(Math.random() * 360);
    this.url = {
      0: "image/chuck.png",
      1: "image/chuck2.png",
      2: "image/chuck3.gif",
      3: "image/chuck4.png",
      4: "image/chuck5.gif",
      5: "image/chuck6.gif"
    };
    this.img = this.url[Math.floor(Math.random() * 6)];
  }
  render(){
    const body = document.querySelector('body');
    const render = `<img class="chuck"
                      style="${this.randomY} ${this.randomX}
                      transform: rotate(${this.rotate}deg) scaleX(${this.flip});"
                      src=${this.img}>`;

    body.insertAdjacentHTML("beforeend", render);
  }
}

//Konami code
const pressed = [];
const secretCode = "38384040373937396665";

window.addEventListener('keyup', (e) => {
  pressed.push(e.keyCode);
  pressed.splice(- secretCode.length - 1, pressed.length -  (secretCode.length/2));

  if (pressed.join("").includes(secretCode)) {
    (new Chuck().render());
    console.log('%cCreate Chuck!', 'font-size:30px; color:#333;');
  }
});
