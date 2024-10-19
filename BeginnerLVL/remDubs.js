const readlineSync = require('readline-sync');

function remove(arr){
    var set = new Set();
    arr.forEach(element => {
        set.add(element);
    })
    return Array.from(set);
}
const input = readlineSync.question("Enter numbers separated by commas: ");
const arr = input.split(',').map(Number);

console.log(`The result is: ${remove(arr)}`);