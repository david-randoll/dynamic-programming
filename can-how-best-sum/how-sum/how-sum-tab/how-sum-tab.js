/*
    Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

    The function should return an array containing any combination of elements that add up to exactly the targetSum. 
    
    If there is no combination that adds up to the targetSum, then return null.

    If there are multiple combination possible, you may return any single one.
*/

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    //initialize the base case
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        const current = table[i];
        if (current === null) continue;

        for (const num of numbers) {
            if (table.length > i + num) table[i + num] = [...current, num];
        }
    }

    return table[targetSum];
};

console.log(howSum(7, [2, 3])); //[3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); //[4, 3]
console.log(howSum(7, [2, 4])); //null
console.log(howSum(8, [2, 3, 5])); //[2,2,2,2]
console.log(howSum(300, [7, 14])); //null
