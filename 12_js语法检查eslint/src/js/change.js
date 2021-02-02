function change() {
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    document.getElementById('app').style.backgroundColor = 'grey';
  }, false);
}
module.exports = change;
