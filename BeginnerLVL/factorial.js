function factorial(n) {
    if (n <= 1) {
        return 1;
    }else{
        return n * factorial(n - 1);
    }
}


const rl = require('readline-sync');
const n = rl.question("number:");
console.log(factorial(parseFloat(n)));