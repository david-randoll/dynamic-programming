const fib = (n) => {
    const table = Array(n + 1).fill(0); //indices starts at 0
    //set base case
    if (table.length >= 1) table[1] = 1;
    for (let i = 0; i <= n; i++) {
        if (table.length > i + 1) table[i + 1] += table[i];
        if (table.length > i + 2) table[i + 2] += table[i];
    }
    return table[n];
};

console.log("fib(0): ", fib(0)); //0
console.log("fib(1): ", fib(1)); //1
console.log("fib(2): ", fib(2)); //1
console.log("fib(3): ", fib(3)); //2
console.log("fib(4): ", fib(4)); //3
console.log("fib(6): ", fib(6)); //8
console.log("fib(50): ", fib(50)); //12586269025

/*
    Time and space complexity:

    See fib-tab.drawio
*/
