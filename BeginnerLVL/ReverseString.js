function reverseString(str) {
    return str.split('').reverse().join('');
}

const rl = require('readline-sync');
const n = rl.question("Enter a message that will be reversed:");
console.log(reverseString(n));
