/*
    Say that you are a traveler on a 2D grid. You begin in the top-left corner and your
    goal is to travel to the bottom-right corner. You may only move down or right.

    In how many ways can you travel to the goal (from top-left to bottom-right) on a grid
    with dimensions m * n?
*/

const gridTraveler = (m, n, memo = {}) => {
    const key1 = m + "," + n;
    const key2 = n + "," + m;

    if (key1 in memo || key2 in memo) return memo[key1] || memo[key2];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key1] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key1];
};

console.log("gridTraveler(1,1): ", gridTraveler(1, 1)); // 1
console.log("gridTraveler(2,3): ", gridTraveler(2, 3)); // 3
console.log("gridTraveler(3,2): ", gridTraveler(3, 2)); // 3
console.log("gridTraveler(3,3): ", gridTraveler(3, 3)); // 6
console.log("gridTraveler(18,18): ", gridTraveler(18, 18)); // 2333606220
