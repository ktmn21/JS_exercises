function isPol(str){
    var reversed = str.split('').reverse().join('');
    return reversed === str;
}

const rl = require('readline-sync');
const n = rl.question("Word:");
console.log(isPol(n));