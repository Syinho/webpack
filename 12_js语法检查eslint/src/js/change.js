function change() {
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    document.getElementById('app').style.backgroundColor = 'grey';
  }, false);
  // 下一行eslint所有规则都失效（下一行不进行eslint检查）
  // eslint-disable-next-line
  console.log('调用change函数成功');
}
module.exports = change;
