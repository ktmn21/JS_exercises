function throttleFunc(func, time) {
    var time = 0;
    return function(...args) {
        const now = Date.now();
        if (now - time > time) {
            time = now;
            return func(...args);
        }else{
            console.log("please wait till the cooldown");
        }
    }
}

function sum (a, b){
    return a + b;
}

var res = throttleFunc(sum, 60000);

console.log(res(2, 3));
console.log(res(4, 5));