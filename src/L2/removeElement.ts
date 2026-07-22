/*
Удалить все вхождения `val` из массива "на месте".

Нельзя создавать новый массив.

После удаления первые `k` элементов массива
должны содержать все оставшиеся значения
в исходном порядке.

Вернуть `k` - новую длину массива.

Элементы после первых `k` нас не интересуют.

Ожидаемая сложность:
O(n)

Подсказка:
Попробуй использовать два указателя.
Один читает массив, второй показывает,
куда записывать следующий подходящий элемент.
*/

function removeElement(nums: number[], val: number): number {
    let wright = 0;

    for (let read = 0; read < nums.length; read++) {

    }

    return 0;
}


// =======================
// Тесты
// =======================

const nums1 = [3, 2, 2, 3];
console.log(removeElement(nums1, 3)); // 2
console.log(nums1);                   // [2, 2, ?, ?]

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums2, 2)); // 5
console.log(nums2);                   // [0, 1, 3, 0, 4, ?, ?, ?]

const nums3 = [1];
console.log(removeElement(nums3, 1)); // 0
console.log(nums3);                   // [?]

const nums4 = [1];
console.log(removeElement(nums4, 2)); // 1
console.log(nums4);                   // [1]

const nums5: number[] = [];
console.log(removeElement(nums5, 5)); // 0
console.log(nums5);                   // []