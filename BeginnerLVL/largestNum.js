const readlineSync = require('readline-sync');

function largest(arr) {
    return Math.max(...arr);
}

console.log(largest([1, 2, 12, 4, 5]));

const input = readlineSync.question("Enter numbers separated by commas: ");
const arr = input.split(',').map(Number);

console.log(`The largest number is: ${largest(arr)}`);
