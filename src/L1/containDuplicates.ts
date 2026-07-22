/*
Дан массив целых чисел nums.

Верни true, если в массиве есть хотя бы одно число,
которое встречается больше одного раза.

Если все числа уникальны - верни false.

Пример 1:
nums = [1, 2, 3, 1]
Ответ: true

Пример 2:
nums = [1, 2, 3, 4]
Ответ: false

Пример 3:
nums = [5, 5, 5]
Ответ: true

Ожидаемая сложность:
Постарайся решить быстрее, чем O(n²).
*/

function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>()

    for (const num of nums) {
        if (set.has(num)) return true
        set.add(num)
    }

    return false
}

// ======================
// ТЕСТЫ
// ======================

console.log(containsDuplicate([1, 2, 3, 1]));          // true
console.log(containsDuplicate([1, 2, 3, 4]));          // false
console.log(containsDuplicate([5, 5, 5]));             // true
console.log(containsDuplicate([1]));                   // false
console.log(containsDuplicate([]));                    // false
console.log(containsDuplicate([1, 2, 3, 4, 5, 6]));   // false
console.log(containsDuplicate([9, 8, 7, 6, 5, 4, 3, 2, 1, 9])); // true