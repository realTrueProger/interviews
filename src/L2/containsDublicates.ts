/*
Вернуть true, если в массиве есть хотя бы один дубликат.

Ожидаемая сложность:
O(n)

Подсказка:
Set разрешается использовать.
*/

function containsDuplicate(nums: number[]): boolean {
    return nums.length !== new Set(nums).size;
}


// =======================
// Тесты
// =======================

console.log(containsDuplicate([1, 2, 3]));        // false
console.log(containsDuplicate([1, 2, 3, 1]));     // true
console.log(containsDuplicate([5]));              // false
console.log(containsDuplicate([7, 7]));           // true
console.log(containsDuplicate([]));               // false