function numStrin(num) {
    return num.toString();
}

console.log(numStrin(23));
var res = typeof (numStrin(12));
console.log(res);

const rl = require('readline-sync');
const n = rl.question("number:");
console.log(numStrin(parseFloat(n)));