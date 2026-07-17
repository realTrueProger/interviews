function myMap<T, R>(
    array: T[],
    callback: (item: T, index: number, array: T[]) => R
): R[] {
    const result: R[] = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result
}

const numbers = [1, 2, 3];

const result = myMap(numbers, (num) => num * 2);

console.log(result); // [2, 4, 6]

const strings = myMap(numbers, (num) => `Number: ${num}`);

console.log(strings); // ["Number: 1", "Number: 2", "Number: 3"]