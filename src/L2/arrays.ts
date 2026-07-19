/*
Задача: рейтинг активных пользователей

Есть массив пользователей.

Нужно вернуть массив строк с именами и итоговыми баллами пользователей,
которые подходят под условия:

1. Пользователь должен быть активным.
2. У пользователя должно быть минимум 2 покупки.
3. Итоговый балл пользователя — сумма всех его покупок.
4. Результат отсортировать по сумме покупок от большей к меньшей.
5. Каждый элемент результата должен выглядеть так:

   "Alex — 350"

Ожидается использование методов массивов:
filter, map, reduce, sort или toSorted.
*/
export {};

type User = {
    id: number;
    name: string;
    isActive: boolean;
    purchases: number[];
};

const users: User[] = [
    {
        id: 1,
        name: "Alex",
        isActive: true,
        purchases: [100, 250],
    },
    {
        id: 2,
        name: "Bob",
        isActive: false,
        purchases: [500, 1000, 200],
    },
    {
        id: 3,
        name: "John",
        isActive: true,
        purchases: [50],
    },
    {
        id: 4,
        name: "Kate",
        isActive: true,
        purchases: [300, 200, 400],
    },
    {
        id: 5,
        name: "Max",
        isActive: true,
        purchases: [100, 150, 50],
    },
];

function getUserRating(users: User[]): string[] {
    return users
        .filter(u => u.isActive && u.purchases.length >= 2)
        .map(u => ({...u, purchases: u.purchases.reduce((a, p) => a + p, 0)}))
        .toSorted((a, b) => b.purchases - a.purchases)
        .map(user => `${user.name} — ${user.purchases}`);
}

// =======================
// Тест
// =======================

console.log(getUserRating(users));

/*
Ожидаемый результат:

[
    "Kate — 900",
    "Alex — 350",
    "Max — 300"
]
*/