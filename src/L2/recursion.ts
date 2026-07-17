// function printNumbers(n: number): void {
//     if (n === 0) return;
//
//     console.log(n);
//
//     printNumbers(n - 1)
// }
//
// printNumbers(5)

// function sumTo(n: number): number {
//     if (n === 0) return 0;
//
//     return n + sumTo(n - 1);
// }
//
// console.log(sumTo(5));

type TFile = {
    type: "file";
    name: string;
};

type Folder = {
    type: "folder";
    name: string;
    items: (TFile | Folder)[];
};

const root: Folder = {
    type: "folder",
    name: "root",
    items: [
        {
            type: "file",
            name: "index.ts",
        },
        {
            type: "folder",
            name: "src",
            items: [
                {
                    type: "file",
                    name: "app.ts",
                },
                {
                    type: "folder",
                    name: "components",
                    items: [
                        {
                            type: "file",
                            name: "Button.tsx",
                        },
                        {
                            type: "file",
                            name: "Input.tsx",
                        },
                    ],
                },
            ],
        },
        {
            type: "file",
            name: "package.json",
        },
    ],
};

// function printFiles(folder: Folder): void {
//     for (const item of folder.items) {
//         if (item.type === "file") {
//             console.log(item.name)
//         } else {
//             printFiles(item);
//         }
//     }
// }
//
// printFiles(root);

function countFiles(folder: Folder): number {
    let count = 0;

    for (const item of folder.items) {
        if (item.type === "file") {
            count++;
        } else {
            count += countFiles(item)
        }
    }

    return count;
}