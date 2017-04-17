const chance = new Chance();

(function(){
  const mails = 12;
  const inbox = document.getElementById('inbox');

  for (let i = 0; i < mails; i++) {
    const render =
    `
    <div class="item">
      <input type="checkbox">
      <div class="mail">
        <p class="name">${chance.name()}</p>
        <p class="title">${chance.sentence({words: 3})}</p>
        <p class="intro">${chance.sentence({words: 16})}</P>
        <p class="date">${chance.date({string: true, american: false, year: 2017})}</P>
      </div>
    </div>
    `;

    inbox.insertAdjacentHTML("beforeend", render);
  }
})();

const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

checkboxes.forEach(check => check.addEventListener("click", handleCheck));

function handleCheck(e) {
  let inBetween = false;
  if(e.shiftKey && this.checked) {

    checkboxes.forEach(check => {
      if(check === this || check === lastChecked) {
        inBetween = !inBetween;
      }
      if(inBetween) check.checked = true;
    });
  }
  lastChecked = this;
}
