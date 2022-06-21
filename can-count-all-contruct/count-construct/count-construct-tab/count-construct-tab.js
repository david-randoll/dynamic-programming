/*
    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.

    You may reuse elements of `wordBank` as many times as needed.
*/

const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    // initialize the base case
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === 0) continue;

        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                if (table.length > i + word.length) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }

    return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"])); // 0
