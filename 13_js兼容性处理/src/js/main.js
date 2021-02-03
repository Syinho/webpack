function change() {
    const div = global.document.getElementsByTagName('div')[0];
    div.addEventListener('click', (ev) => {
        ev.target.style.backgroundColor = 'grey';
    }, false);

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log('定时器执行完毕');
            resolve();
        }, 1000);
    })

    console.log(promise);
}
module.exports = change;