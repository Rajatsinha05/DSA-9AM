
const isExists = (arr, target) => {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}



// let result = isExists(arr, target)
// console.log(result);

// let result = -1

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//         result = i
//         break
//     }
// }
// console.log(result);

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let target = 10

// function
//  [0,n-2]
// if (arr[i]>arr[i+1]) false
//true
