function change() {
    let count = 0;
    document.getElementById('app1').addEventListener('click', () => {
        if (count % 2 == 0) {
            document.getElementById('app1').style.backgroundColor = '#05f78a';
            count++;
        } else {
            document.getElementById('app1').style.backgroundColor = 'lightcoral';
            count++;
        }
    }, false);
}

export default change;