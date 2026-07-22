/*
LeetCode 1. Two Sum

Дан массив целых чисел nums и число target.

Нужно вернуть индексы двух чисел, сумма которых равна target.

Гарантируется:
- решение существует ровно одно;
- один и тот же элемент использовать дважды нельзя.

Примеры:

nums = [2,7,11,15], target = 9
=> [0,1]

nums = [3,2,4], target = 6
=> [1,2]

nums = [3,3], target = 6
=> [0,1]
*/

function twoSum(nums: number[], target: number): number[] {

    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        let diff = target - current;

        if (map.has(diff)) {
            return [map.get(diff)!, i]
        }

        map.set(current, i);
    }

    return [-1,-1]
}

// ----------------------
// Тесты
// ----------------------

console.log(twoSum([2, 7, 11, 15], 9))
// [0,1]

console.log(twoSum([3, 2, 4], 6))
// [1,2]

console.log(twoSum([3, 3], 6))
// [0,1]

console.log(twoSum([-1, -2, -3, -4, -5], -8))
// [2,4]

console.log(twoSum([0, 4, 3, 0], 0))
// [0,3]

console.log(twoSum([1, 5, 3, 8], 9))
// [0,3]