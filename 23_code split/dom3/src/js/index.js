function add(a, b) {
    return a + b;
}
// eslint-disable-next-line
console.log(add(1, 3));
const arr = [3, 5, 7, 9];

import( /* webpackChunkName:'testChunk' */ './test')
    .then(({mul, sum}) => {
        console.log('引入sum函数'+sum(...arr));
        console.log('引入mul函数'+mul(5, 7));
    })
    .catch(() => {
        console.log('文件加载失败');
    });