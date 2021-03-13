function sum(...args) {
    return args.reduce((acc, cur) => {
        return acc + cur;
    })
}
const arr = [3, 5, 7];
// eslint-disable-next-line
console.log(sum(...arr));

function mul(a, b) {
    return a * b;
}

export {
    sum,
    mul
};