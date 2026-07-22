/**
 * Дана строка s, состоящая только из символов:
 *
 * () [] {}
 *
 * Нужно определить, является ли строка корректной последовательностью скобок.
 *
 * Правильная последовательность должна удовлетворять трём условиям:
 *
 * 1. Каждая открывающая скобка закрывается скобкой того же типа.
 * 2. Скобки закрываются в правильном порядке.
 * 3. У каждой закрывающей скобки есть соответствующая открывающая.
 *
 * Вернуть:
 * - true, если строка корректна;
 * - false в противном случае.
 */

function isValid(s: string): boolean {
    if (s.length === 0 || s.length === 1) return false

    const map = new Map<string, string>([
            [")", "("],
            ["]", "["],
            ["}", "{"]
        ]
    )

    const stack = []

    for (const char of s) {
        if(!map.has(char)) {
            stack.push(char)
        } else {
            if (map.get(char) !== stack.at(-1)) {
                return false
            }
            stack.pop()
        }

    }

    return stack.length === 0;
}

console.log(isValid("()")) // true

console.log(isValid("()[]{}")) // true

console.log(isValid("(]")) // false

console.log(isValid("([])")) // true

console.log(isValid("([)]")) // false

console.log(isValid("{[]}")) // true

console.log(isValid("(")) // false

console.log(isValid("]")) // false

console.log(isValid("((()))")) // true

console.log(isValid("((())")) // false

console.log(isValid("(){}[]")) // true

console.log(isValid("{{{{")) // false

console.log(isValid("}}}}")) // false

console.log(isValid("{[()]}")) // true

console.log(isValid("{[(])}")) // false