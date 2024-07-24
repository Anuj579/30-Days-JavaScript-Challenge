// use the rest operator in a function to accept an arbitrary number of arguments, sum them , and return the result
function sum(...args) {
    let sum = 0;
    // for (let i = 0; i < args.length; i++) {
    //     sum += args[i];
    // }
    for (const i of args) {
        sum += i;
    }
    return sum;
}
console.log(sum(1, 2, 10));