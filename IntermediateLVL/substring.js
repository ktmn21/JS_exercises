function substring(str, subs) {
    return str.includes(subs);
}

const rl = require('readline-sync');
const n1 = rl.question("String:");
const n2 = rl.question("Substring:");
console.log(substring(n1, n2));