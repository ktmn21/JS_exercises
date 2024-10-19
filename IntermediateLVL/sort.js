const readlineSync = require('readline-sync');

function solve(arr) {
    return arr.sort((a, b) => a - b); //this is a JS's build in sorting algorithms that uses timsort algorithm.
}

const input = readlineSync.question("Enter numbers separated by commas (e.g., 3,1,4,1,5): ");

let userArray;
try {
    userArray = input.split(',').map(Number);
    if (userArray.some(isNaN)) {
        throw new Error("All inputs must be valid numbers.");
    }
} catch (error) {
    console.error("Invalid input. Please enter valid numbers.");
    process.exit(1);
}

const sortedArray = solve(userArray);
console.log('Sorted Array:', sortedArray);
