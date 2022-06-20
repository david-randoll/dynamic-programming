/*
    From our prev implementation calculating fib(50) took a very long time
    which was bottleneck by its time complexity being exponential
    This implementation aims to fix that and make the function faster.

    We will do this using memorization
    To do this we will use some fast access data structure. Usually this is a dictionary or hashmap.
    In JS, it is an object where keys is the argument of the fn and value would be the return value
*/
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log("fib(1): ", fib(1)); //1
console.log("fib(2): ", fib(2)); //1
console.log("fib(3): ", fib(3)); //2
console.log("fib(4): ", fib(4)); //3
console.log("fib(50): ", fib(50)); //12586269025
