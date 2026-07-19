/*
Задача: First Unique Character

Напиши функцию firstUniqueChar.

Она принимает строку и возвращает первый символ,
который встречается в строке ровно один раз.

Если такого символа нет — вернуть null.

Условия:
- Не использовать indexOf/lastIndexOf для каждого символа.
- Постарайся решить за O(n).
- Можно использовать Map.

Пример:
"aabbcddee" -> "c"
"aabbcc" -> null
*/

function firstUniqueChar(str: string): string | null {
    const counts = new Map<string, number>();

    for (const char of str) {
        const currentCount = counts.get(char) ?? 0;
        counts.set(char, currentCount + 1);
    }

    for (const char of str) {
        if (counts.get(char) === 1) return char
    }

    return null;
}


// =======================
// Тесты
// =======================

console.log(firstUniqueChar("aabbcddee")); // "c"
console.log(firstUniqueChar("aabbcc"));    // null
console.log(firstUniqueChar("javascript"));// "j"
console.log(firstUniqueChar("swiss"));     // "w"
console.log(firstUniqueChar(""));          // null
console.log(firstUniqueChar("a"));         // "a"
console.log(firstUniqueChar("ab"));        // "a"
console.log(firstUniqueChar("aab"));       // "b"
console.log(firstUniqueChar("abcabcde"));  // "d"