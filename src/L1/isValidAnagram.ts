/*
LeetCode 242. Valid Anagram

Даны две строки s и t.

Верни true, если строка t является анаграммой строки s,
иначе верни false.

Анаграмма - это строка, содержащая те же символы
в том же количестве, но, возможно, в другом порядке.

Пример 1:
s = "anagram"
t = "nagaram"

Ответ:
true

Пример 2:
s = "rat"
t = "car"

Ответ:
false

Ожидаемая сложность:
Постарайся решить за O(n).
*/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
        let currentS = s[i];
        let currentT = t[i];

        map.set(currentS, (map.get(currentS) ?? 0) + 1)
        map.set(currentT, (map.get(currentT) ?? 0) - 1)
    }

    for (let [_, value] of map) {
        if (value !== 0) return false
    }

    return true

}

// ======================
// ТЕСТЫ
// ======================

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
console.log(isAnagram("", ""));               // true
console.log(isAnagram("a", "a"));             // true
console.log(isAnagram("ab", "ba"));           // true
console.log(isAnagram("aa", "ab"));           // false
console.log(isAnagram("listen", "silent"));   // true
console.log(isAnagram("hello", "world"));     // false