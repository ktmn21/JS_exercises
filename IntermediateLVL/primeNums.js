function primes(nums){
    let primes = [];
    for (var i = 2; i < nums; i ++){
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num){
    if (num < 2){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i ++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

const rl = require('readline-sync');
const n = rl.question("word 1:");
console.log(isPrime(parseFloat(n)));