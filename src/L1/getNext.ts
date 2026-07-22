const getNext = (arr: any[], repeatCount: number) => {
    let start = 1;
    let position = 0;

    while (start <= repeatCount) {
        console.log(start, arr[position])

        if (position === arr.length - 1) {
            position = 0;
        } else {
            position++;
        }

        start++;
    }
}

getNext([1,2,3], 10)