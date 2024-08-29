// subArrays
// TC && SC
// O(n ^ 3)
// kadanes algorithm
let arr = [1, 4, -10, 4, 7]



let currSum = arr[0]
let maxSum = arr[0]

for (let i = 1; i < arr.length; i++) {
    currSum += arr[i]
    maxSum = Math.max(maxSum, currSum)
    currSum = Math.max(0, currSum)
}

console.log(maxSum);





let arr3 = [1, -1, 5, -2, 3], K = 3



// let arrSum = 0
// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i]
// }

// console.log(arrSum);


// const sum = (arr) => {
//     let sumOfArray = 0
//     for (let ele of arr) {
//         sumOfArray += ele
//     }
//     return sumOfArray
// }

// let maxSum = 0
for (let i = 0; i < arr.length; i++) {
    let subArray = []
    for (let j = i; j < arr.length; j++) {
        subArray.push(arr[j])

        let currSum = sum(subArray)
     
        if (currSum > maxSum) {
            maxSum = currSum
        }
    }

}
console.log(maxSum);

