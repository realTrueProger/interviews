/*
Задача: Maximum Sum of Subarray of Size K (Sliding Window)

Дан массив чисел nums и число k.

Найди максимальную сумму любого непрерывного подмассива длины k.

Требования:
- O(n)
- Без вложенных циклов.
- Если k > nums.length, вернуть -1.

Примеры:

[2, 1, 5, 1, 3, 2], k = 3
→ 9

потому что:
[2,1,5] = 8
[1,5,1] = 7
[5,1,3] = 9  <- максимум
[1,3,2] = 6
*/

function maxSubarraySum(nums: number[], k: number): number {
    if (k > nums.length) return -1;

    let max = -1;

    return max
}

// =======================
// ТЕСТЫ
// =======================

console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9

console.log(maxSubarraySum([2, 3, 4, 1, 5], 2)); // 7

console.log(maxSubarraySum([5, 5, 5, 5], 2)); // 10

console.log(maxSubarraySum([1, 2, 3], 3)); // 6

console.log(maxSubarraySum([1, 2, 3], 4)); // -1

console.log(maxSubarraySum([-2, -1, -5, -3], 2)); // -3

console.log(maxSubarraySum([10], 1)); // 10

console.log(maxSubarraySum([1, 2, 3, 4, 5], 1)); // 5