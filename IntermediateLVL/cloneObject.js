const readlineSync = require('readline-sync');

function deepCloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Example object to clone
var person1 = {
    name: "Elchi",
    age: 23,
    study: {
        university: 'UCA',
        major: 'CS',
        year: '2027'
    }
};

const clonedPerson = deepCloneObj(person1);
console.log('Original Object:', person1);
console.log('Cloned Object:', clonedPerson);

const input = readlineSync.question("Enter a JSON object string: ");

let userObject;
try {
    userObject = JSON.parse(input);
} catch (error) {
    console.error("Invalid JSON input. Please enter a valid JSON string.");
    process.exit(1);
}

const clonedUserObject = deepCloneObj(userObject);

console.log('Initial one:', userObject);
console.log('Cloned one:', clonedUserObject);
