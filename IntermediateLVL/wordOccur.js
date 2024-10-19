function occurrence(str) {
    var words = str.toLowerCase().split(' ');
    var map = new Map();

    words.forEach(function(word) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    });

    return map;
}

const rl = require('readline-sync');
const n = rl.question("Enter a sentence: ");
console.log(occurrence(n));
