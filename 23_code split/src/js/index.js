import change from './change';
// import sum from './test';
// eslint-disable-next-line
console.log(sum(2, 3));
change();


// import 动态导入语法
import('./test')
    .then((sum) => {
        // 文件加载成功
        // eslint-disable-next-line
        console.log(sum(2, 3));
    });