let matrix = [
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1]

]

// const findMax = (arr) => {
//     console.log(Math.max(...arr));

// }






const countOne = (arr, row) => {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count += 1
        }
    }
    console.log(row + 1, count);

}














const findMaxOne = (arr) => {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count += 1
        }
    }
    return count

}




let maxOne = 0;
let row = -1
for (let i = 0; i < matrix.length; i++) {
    // findMax(matrix[i]);
    let one = findMaxOne(matrix[i])
    if (maxOne < one) {
        maxOne = one
        row = i + 1
    }
}

console.log(maxOne, row);

let n = matrix.length;
let m = matrix[0].length;

















for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (i == 0 || j == 0 || j == m - 1 || i == n - 1) {
            // console.log(matrix[i][j]);

        }
    }
}