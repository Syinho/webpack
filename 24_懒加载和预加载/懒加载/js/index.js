// eslint-disable-next-line
console.log('index被加载');

global.document.getElementById('btn').addEventListener('click', () => {
  import(/* webpackChunkName:'test',webpackPrefetch:true */ './test').then(({
    change,
  }) => {
    change();
  });
}, false);
