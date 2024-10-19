function anagrams(str1, str2) {
    var sorted1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    var sorted2 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return sorted1 === sorted2
}

const rl = require('readline-sync');
const n1 = rl.question("word 1:");
const n2 = rl.question("word 2:");
console.log(anagrams(n1, n2));