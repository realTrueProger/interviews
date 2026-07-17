function reverse(str: string): string {
    const resultArr = []

    for (let i = str.length - 1; i >= 0; i--) {
        resultArr.push(str[i]);
    }

    return resultArr.join('');
}

console.log(reverse("hello")); // "olleh"
console.log(reverse("TypeScript")); // "tpircSepyT"
console.log(reverse("a")); // "a"
console.log(reverse("")); // ""