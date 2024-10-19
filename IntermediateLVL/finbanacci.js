function fibanacci(n){
    if (n <= 1){
        return n;
    }
    else{
        return fibanacci(n -1 ) + fibanacci(n - 2);
    }
}

function fibacciarr(n) {
    var res = [];
    for (var i = 0; i < n; i ++){
        res.push(fibanacci(i));
    }
    return res;
}
const rl = require('readline-sync');
const n = rl.question("How many elements?");
console.log(fibacciarr(parseFloat(n)));