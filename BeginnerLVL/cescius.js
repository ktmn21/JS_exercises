function cels(num){
    return (num * 9 /5) + 32;
}

const rl = require('readline-sync');
const n = rl.question("n:");
console.log(cels(parseFloat(n)));