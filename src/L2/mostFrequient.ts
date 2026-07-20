/*
Задача: Most Frequent Element

Дан массив чисел.

Нужно вернуть число,
которое встречается чаще всего.

Если таких несколько —
вернуть то, которое встретилось первым.

Ожидаемая сложность:
O(n)

Можно использовать Map.


Примеры:

[1, 2, 2, 3]          -> 2

[5, 1, 5, 2, 2, 5]    -> 5

[7]                   -> 7

[1, 2, 1, 2]          -> 1
(оба встречаются по 2 раза,
но 1 встретилась раньше)
*/

function mostFrequent(nums: number[]): number {
    const map = new Map<number, number>()

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }

    let maxCount = -1;
    let result = -1

    for (const num of nums) {
        if (map.get(num)! > maxCount) {
            maxCount = map.get(num)!;
            result = num;
        }
    }

    return result;
}


// =======================
// Тесты
// =======================

console.log(mostFrequent([1, 2, 2, 3]));             // 2
console.log(mostFrequent([5, 1, 5, 2, 2, 5]));       // 5
console.log(mostFrequent([7]));                      // 7
console.log(mostFrequent([1, 2, 1, 2]));             // 1
console.log(mostFrequent([10, 20, 10, 30, 20, 10])); // 10