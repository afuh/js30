/* jshint -W138 */
const wrapper = document.querySelector('.wrapper'),
      addItems = wrapper.querySelector('.add-items'),
      itemsList = wrapper.querySelector('.plates'),
      check = wrapper.querySelector('[name=check]'),
      uncheck = wrapper.querySelector('[name=uncheck]'),
      clear = wrapper.querySelector('[name=clear]');

let items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text, //ES6 shorthand for text: text;
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
      `;
  }).join("");
}

function toggleDone(e){
  if(!e.target.matches('input')) return; //skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;

  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAll(){
  items.map(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAll(){
  items.map(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clearAll(){
  localStorage.removeItem('items');
  items = JSON.parse(localStorage.getItem('items')) || [];
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
check.addEventListener('click', checkAll);
uncheck.addEventListener('click', uncheckAll);
clear.addEventListener('click', clearAll);

populateList(items, itemsList);
