/*
Задача: Two Sum

Дан массив чисел nums и число target.

Нужно вернуть индексы двух элементов,
сумма которых равна target.

Гарантируется, что решение существует
и использовать один элемент дважды нельзя.

Желательно решить за O(n).

Можно использовать Map.


Пример:

nums = [2, 7, 11, 15]
target = 9

Ответ:
[0, 1]

Потому что:
nums[0] + nums[1] === 9
*/

function twoSum(nums: number[], target: number): [number, number] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const leftOver = target - nums[i];

        if (map.has(leftOver)) {
            return [map.get(leftOver)!, i]
        }

        map.set(nums[i], i);
    }

    return [-1, -1];
}


// =======================
// Тесты
// =======================

console.log(twoSum([2, 7, 11, 15], 9));      // [0, 1]
console.log(twoSum([3, 2, 4], 6));           // [1, 2]
console.log(twoSum([3, 3], 6));              // [0, 1]
console.log(twoSum([1, 5, 8, 3], 11));       // [2, 3]
console.log(twoSum([10, 20, 30, 40], 70));   // [2, 3]