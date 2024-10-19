function rendNum(a, b){
    if (a > b){
        throw new Error("Inputs are not valid");
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}

console.log(rendNum(1, 5));

const rl = require('readline-sync');
const n1 = rl.question("From:");
const n2 = rl.question("To:");
console.log(rendNum(parseFloat(n1), parseFloat(n2)));