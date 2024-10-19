const readlineSync = require('readline-sync');

function uniqueVals(arr) {
    const res = new Set();
    for (let i = 0; i < arr.length; i++) {
        res.add(arr[i]);
    }
    return Array.from(res);
}

const input = readlineSync.question("Enter an array (e.g., [1, 2, 2, 3]): ");

let userArray;
try {
    userArray = JSON.parse(input);
    if (!Array.isArray(userArray)) {
        throw new Error("Input must be an array.");
    }
} catch (error) {
    console.error("Invalid input. Please enter a valid array.");
    process.exit(1);
}

const uniqueValues = uniqueVals(userArray);
console.log('Result:', uniqueValues);
