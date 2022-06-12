const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

console.log("fib(1): ", fib(1)); //1
console.log("fib(2): ", fib(2)); //1
console.log("fib(3): ", fib(3)); //2
console.log("fib(4): ", fib(4)); //3
console.log("fib(50): ", fib(50)); //12586269025

/*
    Time and space complexity:

    See fib.drawio or fib.png
*/
