const readlineSync = require('readline-sync');

function sumOf(arr) {
    let res = 0;
    arr.forEach((element) => {
        res += element;
    });
    return res;
}

const input = readlineSync.question("Enter numbers separated by commas: ");
const arr = input.split(',').map(Number);

console.log(`The sum of the array is: ${sumOf(arr)}`);
