let arr = [-1, -10, 3, 0, 1, 2, 4, 5]

let set = new Set(arr)

for (let i = 1; i <= 20000; i++) {
    if (!set.has(i)) {
        console.log(i);
        break;

    }
}

let str = "raarce"