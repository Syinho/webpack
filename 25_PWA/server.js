const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('创建服务器成功');
});

app.use(express.static('./dist'));