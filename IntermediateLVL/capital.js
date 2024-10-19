function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

const rl = require('readline-sync');
const n = rl.question("Enter a message that will be capitalized:");
console.log(capitalizeWords(n.toString()));

