/*
Задача

Дано целое число x.

Верни true, если число является палиндромом,
и false в противном случае.

Палиндром - это число, которое одинаково читается
слева направо и справа налево.

Нельзя преобразовывать число в строку.

Примеры:

x = 121
=> true

x = -121
=> false

x = 10
=> false
*/

function isPalindrome(x: number): boolean {
    if (x < 0) return false

    let strForm = String(x)

    let left = 0
    let right = strForm.length - 1

    while (left < right) {
        if (strForm[left] !== strForm[right]) return false
        left++
        right--
    }

    return true
}

// ----------------------
// Тесты
// ----------------------

console.log(isPalindrome(121))
// true

console.log(isPalindrome(-121))
// false

console.log(isPalindrome(10))
// false

console.log(isPalindrome(0))
// true

console.log(isPalindrome(7))
// true

console.log(isPalindrome(1221))
// true

console.log(isPalindrome(12321))
// true

console.log(isPalindrome(1231))
// false

console.log(isPalindrome(1001))
// true

console.log(isPalindrome(100))
// false