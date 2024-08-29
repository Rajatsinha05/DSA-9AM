let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10]


const reverseArray = (arr) => {
    let i = 0;
    let j = arr.length - 1
    while (i < j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}
console.log(arr);
console.log(reverseArray(arr));

let arr1 = [20, 40, 60, 80, 100]
let arr2 = [10, 30, 50, 70, 90, 120]



























// // 1,10,2,9,3,8,

// let i = 0;
// let j = arr.length - 1

// while (i < j) {
//     console.log(arr[i++], arr[j--]);
// }


const reverse = (str) => {
    let reverseStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr
}

const isPalindrome = (str) => {

    let i = 0
    let j = str.length - 1
    while (i < j) {
        if (str[i] != str[j]) {
            return false
        }
        else {
            i++
            j--
        }
    }


    return true
}


let name = "nayani"

// let reverseStr = reverse(name)
// console.log(reverseStr);
// if (name == reverseStr) {
//     console.log("palindrome");
// }
// else {
//     console.log("not palindrome");
// }
// console.log(isPalindrome(name));