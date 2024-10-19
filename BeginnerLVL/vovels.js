function numVowels(str) {
    var num = 0;
    var vowels = 'aeiouAEIOU';

    for (var curr = 0; curr < str.length; curr++) {
        if (vowels.includes(str[curr])) {
            num++;
        }
    }

    return num;
}


const rl = require('readline-sync');
const n = rl.question("Word:");
console.log(numVowels(n));

