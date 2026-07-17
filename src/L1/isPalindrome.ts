function isPalindrome(str: string): boolean {
    if (str.length === 0 || str.length === 1) return true;

    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true
console.log(isPalindrome("")); // true