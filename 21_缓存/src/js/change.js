function change() {
  global.document.getElementsByTagName('button')[0].addEventListener('click', () => {
    global.document.body.style.backgroundColor = 'red';
  }, false);
}

function sum(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}
export {
  change,
  sum,
};
