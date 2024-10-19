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
function isEvenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

(async () => {
    let num = parseInt(await ask('Enter a number: '), 10);
    console.log(`${isEvenOdd(num)}`);
})();
