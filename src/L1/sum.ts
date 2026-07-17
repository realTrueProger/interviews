function sum(numbers: number[]): number {
    return numbers.reduce((acc, number) => acc + number, 0)
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 20])); // 30
console.log(sum([])); // 0