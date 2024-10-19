const readlineSync = require('readline-sync');

function validEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const emailInput = readlineSync.question("Enter the email: ");

console.log(validEmail(emailInput));
