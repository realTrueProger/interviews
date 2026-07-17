function findMax(numbers: number[]): number | undefined {
    if (numbers.length === 0) return undefined;

    let max = numbers[0];

    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
    }

    return max;
}

console.log(findMax([1, 5, 3]));      // 5
console.log(findMax([-10, -2]));      // -2
console.log(findMax([]));          // undefined