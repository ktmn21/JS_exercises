const readline = require('readline');

const ask = (query) => new Promise(resolve => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(query, (answer) => {
        rl.close();
        resolve(answer);
    });
});

function calc(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/':
            if (b === 0) {
                return "Cannot divide by 0!";
            } else {
                return a / b;
            }
        default:
            return "Invalid syntax!";
    }
}

(async () => {
    let a = parseFloat(await ask('Enter the value of a: '));
    let b = parseFloat(await ask('Enter the value of b: '));
    let operator = await ask('Enter the operator (+, -, *, /): ');

    console.log(`The result of ${a} ${operator} ${b} is: ${calc(a, b, operator)}`);
})();
