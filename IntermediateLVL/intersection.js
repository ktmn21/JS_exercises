const readlineSync = require('readline-sync');

function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.indexOf(value) !== -1);
}


const input1 = readlineSync.question("Enter the first array (e.g., [1, 2, 3]): ");
const input2 = readlineSync.question("Enter the second array (e.g., [2, 3, 4]): ");

let arr1, arr2;

try {
    arr1 = JSON.parse(input1);
    arr2 = JSON.parse(input2);

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("Both inputs must be arrays.");
    }
} catch (error) {
    console.error("Invalid input. Please enter valid arrays.");
    process.exit(1);
}

const intersection = findIntersection(arr1, arr2);
console.log('Intersection:', intersection);
