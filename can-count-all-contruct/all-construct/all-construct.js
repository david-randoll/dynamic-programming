/*
    Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings.

    The function should return a 2D array containing all of the ways that the `target` can be constructed by concatenating elements of the
    `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`.

    You may reuse elements of `wordBank` as many times as needed.
*/

const allConstruct = (target, wordBank) => {
    if (target === "") return [[]];

    const result = [];
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map((way) => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
/*
    [
        ['purp','le']
        ['p', 'ur', 'p', 'le']
    ]
*/
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
/*
    [
        ['ab', 'cd', 'ef' ],
        ['ab', 'c', 'def' ],
        ['abc', 'def' ],
        ['abcd', 'ef' ]
    ]
*/
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// []
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
/*
    [
        [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
        [
            'enter', 'a', 'p', 'ot', 'ent', 'p', 'o', 't'
        ],
        [
            'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'ot'
        ],
        [
            'enter', 'a', 'p', 'o', 't', 'ent', 'p', 'o', 't'
        ]
    ]
*/
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));
// []
