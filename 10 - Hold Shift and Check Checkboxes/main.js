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
