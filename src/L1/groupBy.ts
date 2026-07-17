type User = {
    id: number;
    name: string;
    age: number;
};

function groupByAge(users: User[]): Record<number, User[]> {
    const map: Record<number, User[]> = {};

    for (const user of users) {
        map[user.age] ? map[user.age].push(user) : map[user.age] = [user];
    }

    return map
}

const users: User[] = [
    {id: 1, name: "Alex", age: 20},
    {id: 2, name: "John", age: 30},
    {id: 3, name: "Kate", age: 20},
    {id: 4, name: "Bob", age: 30},
    {id: 5, name: "Mike", age: 25},
];

console.log(groupByAge(users));