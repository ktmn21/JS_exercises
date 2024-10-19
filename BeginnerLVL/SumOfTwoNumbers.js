function sum(a, b){
    return a + b;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(a, b) {
    return a + b;
}

rl.question('Enter the value of a: ', (a) => {
    rl.question('Enter the value of b: ', (b) => {
        const result = sum(parseFloat(a), parseFloat(b));

        console.log(`The sum of ${a} and ${b} is: ${result}`);

        rl.close();
    });
});
