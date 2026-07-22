/*
Вернуть true, если строка является палиндромом.

Палиндром читается одинаково слева направо
и справа налево.

Пока игнорировать пробелы, регистр и пунктуацию НЕ нужно.
Сравниваем строку как есть.

Примеры:
"level"  → true
"abba"   → true
"hello"  → false
"a"      → true
""       → true
*/

function isPalindrome(str: string): boolean {
    let left = 0
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++
        right--
    }

    return true
}


// Тесты
console.log(isPalindrome("level")); // true
console.log(isPalindrome("abba"));  // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a"));     // true
console.log(isPalindrome(""));      // true