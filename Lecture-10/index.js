
let matrix = [
    [10, 20, 30, 40],
    [50, 60, 70, 80],
    [90, 100, 110, 120],
    [200, 300, 400, 500]

]


// 03,12,21,30
let n = matrix.length
let m = matrix[0].length

let k = n - 1
for (let i = 0; i < n; i++) {
    // for (let j = 0; j < m; j++) {
    //     if (i == j) {
    //         console.log(matrix[i][j]);

    //     }

    // }

    console.log(matrix[i][k--]);

}

