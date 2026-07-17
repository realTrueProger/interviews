// function unique(numbers: number[]): number[] {
//     const map = new Map<number, number>();
//
//     for (let number of numbers) {
//         if (!map.has(number)) {
//             map.set(number, 0);
//         }
//     }
//
//     return [...map.keys()]
// }

function unique(numbers: number[]): number[] {
    const result: number[] = [];

    for (let number of numbers) {
        if (!result.includes(number)) {
            result.push(number);
        }
    }

    return result;
}

console.log(unique([1, 2, 2, 3, 1])); // [1, 2, 3]
console.log(unique([])); // []
console.log(unique([5])); // [5]
console.log(unique([1, 1, 1, 1])); // [1]
console.log(unique([3, 2, 1, 2, 3])); // [3, 2, 1]