type NestedArray<T> = Array<T | NestedArray<T>>;

function flatten<T>(arr: NestedArray<T>): T[] {
    let result: T[] = [];

    for (const el of arr) {
        if(!Array.isArray(el)) {
            result.push(el)
        } else {
            result.push(...flatten(el));
        }
    }

    return result
}

console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
console.log(flatten([])); // []
console.log(flatten([[[1]], 2])); // [1, 2]