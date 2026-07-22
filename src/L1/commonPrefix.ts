/*
Задача

Дан массив строк strs.

Нужно найти самый длинный общий префикс
(начало строки), который присутствует
у всех строк массива.

Если общего префикса нет,
верни пустую строку "".

Примеры:

["flower", "flow", "flight"]
=> "fl"

["dog", "racecar", "car"]
=> ""
*/

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ""

    let first = strs[0]

    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if(first[i] !== strs[j][i]) {
                return first.slice(0,i)
            }
        }
    }

    return first
}

// ----------------------
// Тесты
// ----------------------

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// "fl"

console.log(longestCommonPrefix(["dog", "racecar", "car"]))
// ""

console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]))
// "inters"

console.log(longestCommonPrefix(["apple", "apple", "apple"]))
// "apple"

console.log(longestCommonPrefix(["a"]))
// "a"

console.log(longestCommonPrefix(["", ""]))
// ""

console.log(longestCommonPrefix(["", "abc"]))
// ""

console.log(longestCommonPrefix(["abc", ""]))
// ""

console.log(longestCommonPrefix(["prefix", "pre", "presentation"]))
// "pre"

console.log(longestCommonPrefix(["ab", "a"]))
// "a"

console.log(longestCommonPrefix(["abc", "xyz"]))
// ""

console.log(longestCommonPrefix(["aa", "aaa", "aaaa"]))
// "aa"