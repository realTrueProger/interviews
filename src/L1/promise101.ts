/*
Задача

Есть две функции.

Получить пользователя.

Затем по его id получить список заказов.

Затем вернуть сумму всех заказов.

Нельзя использовать async/await.
Только then().

Ожидаемый результат:
console.log(total); // 600
*/

type User = {
    id: number;
    name: string;
};

type Order = {
    id: number;
    price: number;
};

function getUser(): Promise<User> {
    return Promise.resolve({
        id: 1,
        name: "Vlad",
    });
}

function getOrders(userId: number): Promise<Order[]> {
    return Promise.resolve([
        { id: 1, price: 100 },
        { id: 2, price: 200 },
        { id: 3, price: 300 },
    ]);
}

const result = getUser().then(user => {
    return getOrders(user.id)
}).then(orders => {
    return orders.reduce((acc, o) => acc + o.price, 0);
})

console.log(result);

// Напиши здесь решение только через then()

