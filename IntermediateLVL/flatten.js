const readlineSync = require('readline-sync');

function flatten(arr) {
    return arr.flat(Infinity);
}

const input = readlineSync.question("Enter a nested array (e.g., [1, [2, 3], 4]): ");

let userArray;
try {
    userArray = JSON.parse(input);
    if (!Array.isArray(userArray)) {
        throw new Error("Input is not an array.");
    }
} catch (error) {
    console.error("Invalid input. Please enter a valid nested array.");
    process.exit(1);
}

const flattenedArray = flatten(userArray);

console.log('Flattened:', flattenedArray);
