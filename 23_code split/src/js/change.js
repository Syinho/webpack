import $ from 'jquery';

function change() {
  const oDiv = global.document.getElementById('app');
  oDiv.addEventListener('click', (ev) => {
    const event = ev;
    event.target.style.backgroundColor = 'red';
  }, false);
  //   eslint-disable-next-line
  console.log($);
}

export default change;
