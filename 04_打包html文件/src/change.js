function change() {
    let divs = document.getElementsByTagName('div');

    function randomNum() {
        return Math.floor(Math.random() * 256);
    }
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', (ev) => {
            ev.target.style.background = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
        }, false);
    }
}
module.exports = change;