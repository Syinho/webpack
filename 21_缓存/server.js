/* 
    启动服务器指令
    npm i nodemon -g
    nodemon server.js

    node server.js
*/


const express = require('express');

const app = express();

app.use(express.static('dist', {
    maxAge: 1000 * 3600
}));

app.listen(3000,()=>{
    console.log('服务器启动成功');
});